import { useUserStore } from "../stores/UserStore";

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

const state = useUserStore.getState();

export default class InfoAutoService {

    static login = async(): Promise<void> => {

        const headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa("matacarlos@nafra.com.ar:ZF6WOhUFsJCKOBKK"));

        const response = await fetch(`api/cars/auth/login`,
        {
            headers: headers,
            method: "POST",
        });

        console.log(response);
        console.log(await response.text());

        let responseBody;

        // Prevent parsing errors when the response body is empty
        try {
            responseBody = await response.json()
        } catch (error) {
            responseBody = {};
        }

        state.setSession({
            infoAutoAccessToken: responseBody.access_token,
            infoAutoRefreshToken: responseBody.refresh_token,
        });
    };

    static refresh_token = async (refresh_token: string): Promise<string> => {

        const headers = new Headers();
        headers.append( "Authorization", `Bearer ${refresh_token}`);

        const response = await fetch(`api/cars/auth/refresh`, 
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

        state.setSession({
            infoAutoAccessToken: responseBody.access_token,
        });

        return responseBody.access_token;
    };

    static getBrands = async (
        bearer: string,
        queryString?: string,
        page: number = 1,
        pageSize: number = 20
    ): Promise<BrandRes[]> => {

        console.log(bearer);

        let url = `api/cars/pub/brands/?&page=${page}&pageSize=${pageSize}`;

        if (queryString)
            url += `&queryString=${queryString}`;

        const headers = new Headers();
        headers.append( "Authorization", `Bearer ${bearer}`);

        const response = await fetch(url, {
            headers: headers,
        });

        console.log(await response.text());

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

        let url = `${process.env.INFO_AUTO_API_URL}/cars/pub/brands/${brand_id}/groups/?&page=${page}&pageSize=${pageSize}`;

        if (prices_from)
            url += `&prices_from=${prices_from}`;

        if (prices_to)
            url += `&prices_to=${prices_to}`;

        const headers = new Headers();
        headers.set('Authorization', 'Bearer ' + state.session?.infoAutoAccessToken);

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

        let url = `${process.env.INFO_AUTO_API_URL}/cars/pub/brands/${brand_id}/groups/${group_id}/models/?&page=${page}&pageSize=${pageSize}`;

        if (prices_from)
            url += `&prices_from=${prices_from}`;

        if (prices_to)
            url += `&prices_to=${prices_to}`;

        const headers = new Headers();
        headers.set('Authorization', 'Bearer ' + state.session?.infoAutoAccessToken);

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

