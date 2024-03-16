export type LoginRes = {
    access_token: string,
    token_type: string,
    expires_in: number,
};

export type CotizadorSession = {
  accessToken?: string;
};

const session: CotizadorSession = { accessToken: undefined };

export default class CotizadorService {

    static login = async(): Promise<void> => {

        const response = await fetch(`https://cotizador-adminse.com.ar:9443/api/auth/login`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ email: "matacarlos@nafra.com.ar", password: "mata2024" })
        });

        let responseBody;

        // Prevent parsing errors when the response body is empty
        try {
            responseBody = await response.json()
        } catch (error) {
            responseBody = {};
        }

        session.accessToken = responseBody.access_token;
    };
}

