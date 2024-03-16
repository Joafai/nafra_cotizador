export type LoginRes = {
    access_token: string;
    token_type: string,
    expires_in: number,
};

export type CotizadorSession = {
  accessToken?: string;
};

const session: CotizadorSession = { accessToken: undefined };

export default class CotizadorService {

    static login = async(): Promise<void> => {

        const response = await fetch(`https://api.infoauto.com.ar/cars/auth/login`,
        {
            method: "POST",
        });

        let responseBody;

        // Prevent parsing errors when the response body is empty
        try {
            responseBody = await response.json()
        } catch (error) {
            responseBody = {};
        }

        session.accessToken = responseBody.access_token;
        session.infoAutoRefreshToken = responseBody.refresh_token;
    };

    static getBrands = async (
        queryString?: string,
        page: number = 1,
        pageSize: number = 20
    ): Promise<BrandRes[]> => {

        this.refresh_token();

        let url = `https://api.infoauto.com.ar/cars/pub/brands/?&page=${page}&pageSize=${pageSize}`;

        if (queryString)
            url += `&queryString=${queryString}`;

        const headers = new Headers();
        headers.set('Authorization', 'Bearer ' + session.accessToken);

        const response = await fetch(url, {
            headers: headers,
        });

        let responseBody;

        // Prevent parsing errors when the response body is empty
        try {
            responseBody = await response.json()
        } catch (error) {
            responseBody = {};
        }

        return responseBody;
    };

    static getGroups = async (
        brand_id: number,
        prices_from: number,
        prices_to: number,
        page: number = 1,
        pageSize: number = 20
    ): Promise<GroupRes[]> => {

        this.refresh_token();

        let url = `https://api.infoauto.com.ar/cars/pub/brands/${brand_id}/groups/?&page=${page}&pageSize=${pageSize}`;

        if (prices_from)
            url += `&prices_from=${prices_from}`;

        if (prices_to)
            url += `&prices_to=${prices_to}`;

        const headers = new Headers();
        headers.set('Authorization', 'Bearer ' + session.accessToken);

        const response = await fetch(url, {
            headers: headers,
        });

        let responseBody;

        // Prevent parsing errors when the response body is empty
        try {
            responseBody = await response.json()
        } catch (error) {
            responseBody = {};
        }

        return responseBody;
    };

    static getModels = async (
        brand_id: number,
        group_id: number,
        prices_from: number,
        prices_to: number,
        page: number = 1,
        pageSize: number = 20
    ): Promise<ModelRes[]> => {

        this.refresh_token();

        let url = `https://api.infoauto.com.ar/cars/pub/brands/${brand_id}/groups/${group_id}/models/?&page=${page}&pageSize=${pageSize}`;

        if (prices_from)
            url += `&prices_from=${prices_from}`;

        if (prices_to)
            url += `&prices_to=${prices_to}`;

        const headers = new Headers();
        headers.set('Authorization', 'Bearer ' + session.accessToken);

        const response = await fetch(url, {
            headers: headers,
        });

        let responseBody;

        // Prevent parsing errors when the response body is empty
        try {
            responseBody = await response.json()
        } catch (error) {
            responseBody = {};
        }

        return responseBody;
    };
}

