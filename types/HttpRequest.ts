export type HttpRequest = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Headers;
  apiVersion?: number;
} & (
  | { needsAuthorization?: true; session: any }
  | { needsAuthorization?: false }
);
