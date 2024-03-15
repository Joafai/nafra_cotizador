import { HttpRequest } from "@/types/HttpRequest";
import { useUserStore } from "@/stores/UserStore";
import { RefreshReq } from "@/types/DTOs/RefreshReq";

export class FetchClient {
  static async get<T>(options: {
    request: HttpRequest;
    responseType?: "json" | "blob";
  }): Promise<T> {
    const { request, responseType = "json" } = options;

    request.method = "GET";
    const response = await http<T>({
      request,
      responseType,
    });
    return response;
  }

  static async post<T>(options: {
    request: HttpRequest;
    body?: any;
  }): Promise<T> {
    const { request, body } = options;

    request.method = "POST";

    const response = await http<T>({
      request,
      body,
    });
    return response;
  }

  static async put<T>(options: {
    request: HttpRequest;
    body?: any;
  }): Promise<T> {
    const { request, body } = options;

    request.method = "PUT";

    const response = http<T>({
      request,
      body,
    });
    return response;
  }

  static async delete<T>(options: { request: HttpRequest }): Promise<T> {
    const { request } = options;

    request.method = "DELETE";
    const response = await http<T>({ request });
    return response;
  }
}

type HttpOptions = {
  request: HttpRequest;
  body?: any;
  responseType?: "json" | "blob";
};

const http = async <T>(options: HttpOptions): Promise<T> => {
  const { body, responseType = "json" } = options;
  let { request } = options;

  const originalHeaders = request.headers;
  // Setup request headers
  request = {
    ...request,
    headers: await setHeaders(
      request.needsAuthorization,
      originalHeaders,
      request.apiVersion
    ),
  };

  try {
    const response = await fetch(request.url, {
      body: JSON.stringify(body),
      headers: request.headers,
      method: request.method,
    });

    let responseBody;

    // Prevent parsing errors when the response body is empty
    try {
      responseBody =
        responseType === "json" ? await response.json() : await response.blob();
    } catch (error) {
      responseBody = {};
    }

    if (response.ok) return responseBody;
    // If something went wrong, check if token is expired and retry the original request

    if (isTokenExpired(response.headers, response.status)) {
      const retry = await handleRefreshToken(request, originalHeaders, body);
      try {
        responseBody =
          responseType === "json" ? await retry.json() : await retry.blob();
      } catch (error) {
        responseBody = {};
      }
      return responseBody;
    } else {
      throw Error("error");
    }
  } catch (error) {
    throw error;
  }
};

const setHeaders = async (
  needsAuthorization = true,
  additionalHeaders?: Headers,
  apiVersion?: number
): Promise<Headers> => {
  let headers: Headers = new Headers();
  const state = useUserStore.getState();

  headers.append("content-type", "application/json-patch+json");
  if (additionalHeaders) {
    headers = { ...headers, ...additionalHeaders };
  }

  headers.append(
    "x-api-version",
    apiVersion ? apiVersion.toString() : "1" // Replace later with the current version for each environment
  );

  if (needsAuthorization) {
    if (!state.session) return headers;

    const accessToken = state.session.accessToken;

    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  return headers;
};

const handleRefreshToken = async (
  request: HttpRequest,
  originalHeaders: Headers | undefined,
  body?: any
): Promise<Response> => {
  await refreshToken();

  // Retry original request
  const retry = await fetch(request.url, {
    body: JSON.stringify(body) || null,
    headers: await setHeaders(true, originalHeaders, request.apiVersion),
    method: request.method,
  });

  return retry;
};

export const refreshToken = async (): Promise<void> => {
  const state = useUserStore.getState();

  if (!state.session) return;
  const body: RefreshReq = {
    accessToken: state.session.accessToken,
    refreshToken: state.session.refreshToken,
  };

  const result = await fetch("/api/Account/refresh", {
    body: JSON.stringify(body),
    headers: await setHeaders(false),
    method: "POST",
  });

  if (result.ok) {
    const resultBody = await result.text();
    // Update access token
    state.setSession({ ...state.session, accessToken: resultBody });
  }
};

const isTokenExpired = (headers: Headers, statusCode: number): boolean => {
  const authenticateHeader =
    headers.get("www-authenticate") || headers.get("Www-Authenticate");

  if (!authenticateHeader) return false;

  return statusCode === 401 && authenticateHeader.includes("Bearer error");
};
