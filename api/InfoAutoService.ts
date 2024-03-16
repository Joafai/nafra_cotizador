export type LoginRes = {
    access_token: string;
    refresh_token: string;
};

export type BrandRes = {
    id: number;
    list_price: boolean;
    logo_url: string;
    name: string;
    prices: boolean;
    prices_from: number;
    prices_to: number;
    summary: string;
};

export type GroupRes = {
    id: number;
    list_price: boolean;
    name: string;
    prices: boolean;
    prices_from: number;
    prices_to: number;
    summary: string;
}

export type ModelRes = {
    as_codia: boolean;
    brand: {
        id: number;
        name: string;
    };
    codia: number;
    description: string;
    features: number[];
    group: {
        id: number;
        name: string;
    };
    list_price: boolean;
    photo_url: string;
    position: number;
    prices: boolean;
    prices_from: number;
    prices_to: number;
    r_codia: number | null;
    summary: string;
}

export type InfoAutoSession = {
  infoAutoAccessToken?: string;
  infoAutoRefreshToken?: string;
};

const session: InfoAutoSession = { infoAutoAccessToken: undefined, infoAutoRefreshToken: undefined };

export default class InfoAutoService {

    static login = async(): Promise<void> => {

        const headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa("matacarlos@nafra.com.ar:ZF6WOhUFsJCKOBKK"));

        const response = await fetch(`https://api.infoauto.com.ar/cars/auth/login`,
        {
            headers: headers,
            method: "POST",
        });

        let responseBody;

        // Prevent parsing errors when the response body is empty
        try {
            responseBody = await response.json()
        } catch (error) {
            responseBody = {};
        }

        session.infoAutoAccessToken = responseBody.access_token;
        session.infoAutoRefreshToken = responseBody.refresh_token;
    };

    static refresh_token = async (): Promise<void> => {

        const headers = new Headers();
        headers.append( "Authorization", `Bearer ${session.infoAutoRefreshToken}`);

        const response = await fetch(`https://api.infoauto.com.ar/cars/auth/refresh`,
        {
            headers: headers,
            method: "POST",
        });

        let responseBody;

        // Prevent parsing errors when the response body is empty
        try {
            responseBody = await response.json()
        } catch (error) {
            responseBody = {};
        }

        session.infoAutoAccessToken = responseBody.access_token;
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
        headers.set('Authorization', 'Bearer ' + session.infoAutoAccessToken);

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
        headers.set('Authorization', 'Bearer ' + session.infoAutoAccessToken);

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
        headers.set('Authorization', 'Bearer ' + session.infoAutoAccessToken);

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

