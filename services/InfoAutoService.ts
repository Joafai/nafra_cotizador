import { FetchClient } from "./FetchClient";
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

    static login = async (): Promise<void> => {

        const headers = new Headers();
        headers.append( "Authorization", `Basic ${process.env.INFO_AUTO_USER}:${process.env.INFO_AUTO_PASSWORD}`);

        const response = await FetchClient.post<LoginRes>({
            request: {
                url: `${process.env.INFO_AUTO_API_URL}/cars/auth/login`,
                headers: headers,
            },
        });

        state.setSession({
            infoAutoAccessToken: response.access_token,
            infoAutoRefreshToken: response.refresh_token,
        });
    };

    static refresh_token = async (): Promise<void> => {

        const headers = new Headers();
        headers.append( "Authorization", `Bearer ${state.session?.infoAutoRefreshToken}`);

        const response = await FetchClient.post<LoginRes>({
            request: {
                url: `${process.env.INFO_AUTO_API_URL}/cars/auth/refresh`,
                headers: headers,
            },
        });

        state.setSession({
            infoAutoAccessToken: response.access_token,
            infoAutoRefreshToken: state.session?.infoAutoRefreshToken,
        });
    };

    static getBrands = async (
        queryString?: string,
        page: number = 1,
        pageSize: number = 20
    ): Promise<BrandRes[]> => {

        let url = `${process.env.INFO_AUTO_API_URL}/cars/pub/brands/?&page=${page}&pageSize=${pageSize}`;

        if (queryString)
            url += `&queryString=${queryString}`;

        const response = await FetchClient.get<BrandRes[]>({
            request: {
                url: url,
            },
        });

        return response;
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

        const response = await FetchClient.get<GroupRes[]>({
            request: {
                url: url,
            },
        });

        return response;
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

        const response = await FetchClient.get<ModelRes[]>({
            request: {
                url: url,
            },
        });

        return response;
    };
}

