export type LoginRes = {
    access_token: string,
    token_type: string,
    expires_in: number,
};

export type ProvinciaRes = {
    id: string,
    nombre: string,
}

export type CotizadorReq = {
    cia: string;
    codigoPostal: string;
    es0km: number;
    fechaNacimiento: string;
    infoautoAnio: number;
    infoautoId: number;
    isMoto: number;
    origen: string;
    producerId: number;
    producerProfileId: number;
    sexo: string;
}

export type AllianzCotizadorReq = {
    cotizadorReq: CotizadorReq;
    allianzClausulaAjuste: number;
    allianzGranizo: number;
    allianzMediopago: string;
    allianzPeriodo: string;
    allianzTieneAlarma: number;
    clientDni: string;
    clientTipoDoc: string;
    codigoCia: string;
    provincia: number;
    sumaAsegurada: number;
    tipoUso: number;
    value: string;
}

export type AllianzCotizacionItemCoberturaRes = {
    tipo_cobertura: string;
    subtipos: {
        cotizacion_id: string;
        cotizacion_generada_id: number;
        cotizacion_generada_item_id: number;
        subtipo_cobertura: string;
        descripcion_cobertura: string;
        descripcion_cobertura_alternativa: string | null;
        codigo_producto: string;
        descripcion_producto: string | null;
        adicionales: any[] | null; 
        premio: string;
        prima: string;
        comision: number;
        franquicia: any;
        iva: string;
        errores: {
            mensaje: string;
            detalle: string;
            source: string;
        }[];
        raw_data: {
            codigoDeCobertura: string;
            descripcionDeCobertura: string;
            codigoDeProducto: string;
            descripcionDeProducto: string;
            prima: {
                importePrima: string;
                importePrimaRC: string;
                importePrimaCasco: string;
                importePrimaAccesorio: string;
                importePrimaSinFranquicia: string;
                importePrimaServicios: string;
            };
            premio: {
                importePremio: string;
            };
            impuestos: {
                importeSellados: string;
                porcentajeIVA: string;
                importeIVA: string;
                importeIngresosBrutos: string;
                importeTotalImpuestos: string;
            };
            sumaAsegurada: string;
            porcentajeRecargoFinanciero: string;
            importeRecargoFinanciero: string;
            requiereInspeccion: boolean;
            ListaFranquicias: {
                Franquicia: any;
            };
            valorComisionPAS: string;
            porcentajeComisionPAS: string;
            producto: any;
            cuotas: number;
            numeroDeCotizacion: string;
            codigo_cobertura_ssn: string;
            descripcion_producto: string;
        };
    }[];
};

export type AllianzCotizacionItemErrorRes = {
    mensaje: string;
    detalle: string;
    source: string;
}

export type AllianzCotizacionItemRes = {
    cia: string;
    codigoCia: string;
    status: string;
    errors: AllianzCotizacionItemErrorRes[];
    errorCode: number | null;
    message: string | null;
    info: any | null;
    esMoto: boolean | null;
    sumaAsegurada: number;
    coberturas: AllianzCotizacionItemCoberturaRes[] | null;
}

export type AllianzCotizadorRes = {
    cotizacionId: number;
    status: string;
    createdAt: string;
    cotizaciones: AllianzCotizacionItemRes[];
}

export type GalenoCotizadorReq = {
    cotizadorReq: CotizadorReq;
    galenoBonificacion: number;
    galenoClausulaAjuste: number;
    galenoGnc: number;
    galenoGncValor: number;
    galenoPlanComercial: string;
    galenoModoFacturacion: string;
    galenoCondicionPago: string;
    galenoFormaPago: number;
    galenoRastreo: number;
    galenoRecargoAdministrativo: number;
    galenoLocalidad: number;
};

export type AdminseSession = {
  accessToken?: string;
};

const session: AdminseSession = { accessToken: undefined };

export default class AdminseService {

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

    static getProvincias = async (
    ): Promise<ProvinciaRes[]> => {

        let url = `https://adminse.com.ar/api/provinces`;

        const response = await fetch(url);

        let responseBody;

        // Prevent parsing errors when the response body is empty
        try {
            responseBody = await response.json()
        } catch (error) {
            responseBody = {};
        }

        return responseBody;
    };

    static allianzCotizar = async (req: AllianzCotizadorReq): Promise<AllianzCotizadorRes> => {

        this.login();

        let url = `https://cotizador-adminse.com.ar:9443/api/cotizador`;

        url += `?`;
        url += `&infoauto_anio=${req.cotizadorReq.infoautoAnio}`;
        url += `&infoauto_id=${req.cotizadorReq.infoautoId}`;
        url += `&cia=${req.cotizadorReq.cia}`;
        url += `&codigo_postal=${req.cotizadorReq.codigoPostal}`;
        url += `&es_0km=${req.cotizadorReq.es0km}`;
        url += `&fecha_nacimiento=${req.cotizadorReq.fechaNacimiento}`;
        url += `&is_moto=${req.cotizadorReq.isMoto}`;
        url += `&origen=${req.cotizadorReq.origen}`;
        url += `&sexo=${req.cotizadorReq.sexo}`;
        url += `&producer_profile_id=${req.cotizadorReq.producerProfileId}`;
        url += `&producer_id=${req.cotizadorReq.producerId}`;

        url += `&allianz_clausula_ajuste=${req.allianzClausulaAjuste}`;
        url += `&allianz_granizo=${req.allianzGranizo}`;
        url += `&allianz_mediopago=${req.allianzMediopago}`;
        url += `&allianz_periodo=${req.allianzPeriodo}`;
        url += `&allianz_tiene_alarma=${req.allianzTieneAlarma}`;
        url += `&client_dni=${req.clientDni}`;
        url += `&client_tipo_doc=${req.clientTipoDoc}`;
        url += `&codigo_cia=${req.codigoCia}`;
        url += `&provincia=${req.provincia}`;
        url += `&suma_asegurada=${req.sumaAsegurada}`;
        url += `&tipo_uso=${req.tipoUso}`;
        url += `&value=${req.value}`;

        const headers = new Headers();
        headers.set('Authorization', 'Bearer ' + session.accessToken);
        console.log(session.accessToken);

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

        console.log(responseBody);

        return responseBody;
    };


    static galenoCotizador = async (req: GalenoCotizadorReq): Promise<AllianzCotizadorRes> => {

        this.login();

        let url = `https://cotizador-adminse.com.ar:9443/api/cotizador`;

        url += `?`;
        url += `&infoauto_anio=${req.cotizadorReq.infoautoAnio}`;
        url += `&infoauto_id=${req.cotizadorReq.infoautoId}`;
        url += `&cia=${req.cotizadorReq.cia}`;
        url += `&codigo_postal=${req.cotizadorReq.codigoPostal}`;
        url += `&es_0km=${req.cotizadorReq.es0km}`;
        url += `&fecha_nacimiento=${req.cotizadorReq.fechaNacimiento}`;
        url += `&is_moto=${req.cotizadorReq.isMoto}`;
        url += `&origen=${req.cotizadorReq.origen}`;
        url += `&sexo=${req.cotizadorReq.sexo}`;
        url += `&producer_profile_id=${req.cotizadorReq.producerProfileId}`;
        url += `&producer_id=${req.cotizadorReq.producerId}`;

        url += `&galeno_bonificacion=${req.galenoBonificacion}`;
        url += `&galeno_clausula_ajuste=${req.galenoClausulaAjuste}`;
        url += `&galeno_gnc=${req.galenoGnc}`;
        url += `&galeno_gnc_valor=${req.galenoGncValor}`;
        url += `&galeno_plan_comercial=${req.galenoPlanComercial}`;
        url += `&galeno_modo_facturacion=${req.galenoModoFacturacion}`;
        url += `&galeno_condicion_pago=${req.galenoCondicionPago}`;
        url += `&galeno_forma_pago=${req.galenoFormaPago}`;
        url += `&galeno_rastreo=${req.galenoRastreo}`;
        url += `&galeno_recargo_administrativo=${req.galenoRecargoAdministrativo}`;
        url += `&galeno_localidad=${req.galenoLocalidad}`;

        const headers = new Headers();
        headers.set('Authorization', 'Bearer ' + session.accessToken);
        console.log(session.accessToken);

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

        console.log(responseBody);

        return responseBody;
    };
}

