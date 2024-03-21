import React, { useState } from "react";
import nafra from "../assets/nafra3.jpeg";
import { z } from "zod";
import { Form, useForm } from "react-hook-form";
import { GetServerSideProps } from "next";
import InfoAutoService from "@/api/InfoAutoService";
import AdminseService, { AllianzCotizadorReq , GalenoCotizadorReq , SancrisCotizadorReq, MercantilCotizadorReq} from "@/api/AdminseService";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

// InfoAutoService.login().then(() => {
//     InfoAutoService.getBrands().then((res) => {
//         console.clear();
//         console.log(res);
//     });
// });

// AdminseService.getProvincias()
//     .then((provincias) => {
//         console.clear();
//         console.log(provincias);
//     });

// AdminseService.login()
//     .then((res) => {
//         console.log(res);
//     });

// const allianzCotizadorReq: AllianzCotizadorReq = {
//     cotizadorReq : {
//         infoautoAnio: 2023,
//         infoautoId: 460862,
//         cia: 'allianz',
//         codigoPostal: '1120',
//         es0km: 0,
//         fechaNacimiento: '1990-01-01',
//         isMoto: 0,
//         origen: 'mata',
//         sexo: 'MALE',
//         producerProfileId: 7462,
//         producerId: 882
//     },
//     allianzClausulaAjuste: 20,
//     allianzGranizo: 1,
//     allianzMediopago: 'T',
//     allianzPeriodo: 'S',
//     allianzTieneAlarma: 0,
//     clientDni: '11111111',
//     clientTipoDoc: 'dni',
//     codigoCia: '0036',
//     provincia: 2,
//     sumaAsegurada: 0,
//     tipoUso: 1,
//     value: 'allianz',
// };
// 
// AdminseService.allianzCotizador(allianzCotizadorReq)
//     .then((res) => {
//         console.log(res);
//     });

// const galenoCotizadorReq: GalenoCotizadorReq = {
//     cotizadorReq : {
//         infoautoAnio: 2023,
//         infoautoId: 460862,
//         cia: 'galeno',
//         codigoPostal: '1120',
//         es0km: 0,
//         fechaNacimiento: '1990-01-01',
//         isMoto: 0,
//         origen: 'mata',
//         sexo: 'MALE',
//         producerProfileId: 9335,
//         producerId: 882
//     },
//     galenoBonificacion: 0,
//     galenoClausulaAjuste: 20,
//     galenoGnc: 0,
//     galenoGncValor: 0,
//     galenoPlanComercial: "GALE",
//     galenoModoFacturacion : "01",
//     galenoCondicionPago : "001",
//     galenoFormaPago : "4",
//     galenoRastreo : 0,
//     galenoRecargoAdministrativo : 0,
//     galenoLocalidad : 1,
// };
// 
// AdminseService.galenoCotizador(galenoCotizadorReq)
//     .then((res) => {
//         console.log(res);
//         console.log(res.cotizaciones[0]);
//     });

// const sancrisCotizadorReq: SancrisCotizadorReq = {
//     cotizadorReq : {
//         infoautoAnio: 2023,
//         infoautoId: 460862,
//         cia: 'sancris',
//         codigoPostal: '1120',
//         es0km: 0,
//         fechaNacimiento: '1990-01-01',
//         isMoto: 0,
//         origen: 'mata',
//         sexo: 'FEMALE',
//         producerProfileId: 9771,
//         producerId: 882
//     },
//     clientDni: "21013839",
//     clientTipoDoc: "dni",
//     provincia: 2,
//     sancrisClausula: 20,
//     sancrisCuotas: 6,
//     sancrisDescuento: 0,
//     sancrisForma_pago: 'creditcard',
//     sancrisGnc: 0,
//     sancrisGps: 0,
//     sancrisPeriodo: 'HalfYear',
//     sancrisSaAcc: 0,
//     sancrisTipoContratacion: 'CA7_Traditional',
//     sancrisTipoDocumento: 'Ext_DNI96',
// };
// 
// AdminseService.sancrisCotizador(sancrisCotizadorReq)
//     .then((res) => {
//         console.log(res);
//         console.log(res.cotizaciones[0]);
//     });

// const mercantilCotizadorReq: MercantilCotizadorReq = {
//     cotizadorReq : {
//         infoautoAnio: 2023,
//         infoautoId: 460862,
//         cia: 'mercantil',
//         codigoPostal: '1120',
//         es0km: 0,
//         fechaNacimiento: '1990-01-01',
//         isMoto: 0,
//         origen: 'mata',
//         sexo: 'FEMALE',
//         producerProfileId: 7463,
//         producerId: 882
//     },
//     clientDni: "21013839",
//     clientTipoDoc: "dni",
//     provincia: 2,
//     mercantilLocalidad: 131228,
//     mercantilAjuste: 0,
//     mercantilBonificacion: 0,
//     mercantilComision: 20,
//     mercantilFormapago: 'C',
//     mercantilGnc: 'N',
//     mercantilIva: 5,
//     mercantilPeriodo: 4,
//     mercantilRastreo: 0,
// };
// 
// AdminseService.mercantilCotizador(mercantilCotizadorReq)
//     .then((res) => {
//         console.log(res);
//         console.log(res.cotizaciones[0]);
//     });


const Cotizador: React.FC = () => {
  const [isCheckedGNC, setIsCheckedGNC] = useState(false);
  const [isCheckedSex, setIsCheckedSex] = useState(false);

  const [colors, setColors] = useState([
    "bg-blue-100",
    "bg-gray-100",
    "bg-gray-100",
    "bg-gray-100",
    "bg-gray-100",
  ]);
  const [borderColor, setBorderColor] = useState([
    "border-[#184c94]",
    "border-gray-300",
    "border-gray-300",
    "border-gray-300",
    "border-gray-300",
  ]);

  const modelosVolkswagen = [
    "Amarok",
    "Gol",
    "Gol Trend",
    "Golf",
    "Jetta",
    "Nivus",
    "Polo",
    "T-Cross",
    "T-Roc",
    "Taos",
    "Tiguan",
    "Touareg",
    "Virtus",
  ];

  const marcasDeAutos = [
    "Volkswagen",
    "Ford",
    "Chevrolet",
    "Toyota",
    "Renault",
    "Peugeot",
    "Fiat",
    "Nissan",
    "Honda",
    "Jeep",
    "Hyundai",
    "Citroën",
    "Kia",
    "Mercedes-Benz",
    "BMW",
    "Audi",
    "Mitsubishi",
    "Suzuki",
    "Volvo",
    "Subaru",
    "Land Rover",
    "Chery",
    "Mini",
    "JAC",
    "Lifan",
    "Great Wall",
    "Geely",
    "Dodge",
    "Chrysler",
    "Alfa Romeo",
    "Smart",
    "Jaguar",
    "RAM",
    "Acura",
    "DS",
    "SsangYong",
    "Porsche",
    "Maserati",
    "Lexus",
    "Infiniti",
    "Bentley",
    "Ferrari",
    "McLaren",
    "Lamborghini",
    "Lotus",
    "Rolls Royce",
    "Aston Martin",
    "Tesla",
    "Bugatti",
    "Genesis",
    "Mahindra",
    "BYD",
    "Haval",
    "DFSK",
    "Dongfeng",
    "Foton",
    "BAIC",
    "Changan",
    "Chery",
    "Haima",
    "Jac",
    "JMC",
    "Lifan",
    "Shineray",
    "SWM",
    "Zotye",
    "Brilliance",
    "Changhe",
    "Chery",
    "Dongfeng",
    "Foton",
    "Great Wall",
    "Haval",
    "JAC",
    "Jinbei",
    "Lifan",
    "Wuling",
  ];

  const versiones = [
    "Full confort",
    "Full confort",
    "Full confort",
    "Full confort",
    "Full confort",
    "Full confort",
  ];

  const años = Array.from({ length: 50 }, (_, i) => 2024 - i);

  const handleClick = (index: number) => {
    const newColors = colors.map((color, i) => {
      return i === index ? "bg-blue-100" : "bg-gray-100";
    });
    const newBorderColor = borderColor.map((color, i) => {
      return i === index ? "border-[#184c94]" : "border-gray-300";
    });
    setColors(newColors);
    setBorderColor(newBorderColor);
  };

  const validationSchema = z.object({
    brand: z.string({ required_error: "El campo es requierido" }),
    year: z.string({ required_error: "El campo es requierido" }),
    model: z.string({ required_error: "El campo es requierido" }),
    version: z.string({ required_error: "El campo es requierido" }),
    gnc: z.boolean(),
    postalCode: z.number(),
    age: z.number(),
    genre: z.boolean(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ValidationSchema>({
    // resolver: zodResolver(validationSchema),
  });

  const onSubmit = handleSubmit(async (data, event) => {
    event?.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="bg-white h-screen-full">
      <div className="flex gap-2 p-12 pb-2">
        <h1 className="text-2xl text-gray-900 font-bold mb-4">Compara</h1>
        <h1 className="text-2xl text-[#184c94] font-bold mb-4">
          Seguros de Autos
        </h1>
      </div>
      <div className="flex gap-2 p-12 pt-4">
        <h4 className="bg-[#184c94] p-1 pl-2 pr-24 text-gray-200 rounded-lg">
          Datos del vehiculo
        </h4>

        <h4 className="bg-gray-200 p-1 pl-2 pr-36 text-[#184c94] rounded-lg">
          Resultado
        </h4>
      </div>
      {/* <Form> */}
      <div
        onClick={() => handleClick(0)}
        className={`flex gap-24 mx-12 p-8 px-32 rounded-lg border-l-4 ${borderColor[0]} ${colors[0]}`}
      >
        <div className="flex flex-col">
          <text className="text-[#184c94] mb-1">Marca</text>
          <select className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500">
            {marcasDeAutos.map((modelo, index) => (
              <option key={index} value={modelo}>
                {modelo}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <text className="text-[#184c94] mb-1">Año</text>
          <select className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500">
            {años.map((modelo, index) => (
              <option key={index} value={modelo}>
                {modelo}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        onClick={() => handleClick(1)}
        className={`flex gap-24  mx-12 p-8 px-32 rounded-lg border-l-4 ${borderColor[1]} ${colors[1]}`}
      >
        <div className="flex flex-col">
          <text className="text-[#184c94] mb-1">Modelo</text>
          <select className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500">
            {modelosVolkswagen.map((modelo, index) => (
              <option key={index} value={modelo}>
                {modelo}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <text className="text-[#184c94] mb-1">Version</text>
          <select className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500">
            {versiones.map((modelo, index) => (
              <option key={index} value={modelo}>
                {modelo}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        onClick={() => handleClick(2)}
        className={`flex gap-2 mx-12 p-8 px-32 flex-col rounded-lg border-l-4 ${borderColor[2]} ${colors[2]}`}
      >
        <text className="text-[#184c94]">Tiene GNC?</text>
        <div className="flex gap-12 pl-6">
          <div className="flex justify-items-center">
            <input
              type="radio"
              checked={isCheckedGNC}
              onChange={() => setIsCheckedGNC(true)}
              className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 border-2 border-solid"
            />
            <text className="text-[#184c94] mb-1">Si</text>
          </div>
          <div className="flex justify-items-center">
            <input
              type="radio"
              checked={!isCheckedGNC}
              onChange={() => setIsCheckedGNC(false)}
              className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 border-2 border-solid"
            />
            <text className="text-[#184c94] mb-1">No</text>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleClick(3)}
        className={`flex gap-2 mx-12 p-8 px-32 flex-col rounded-lg border-l-4 ${borderColor[3]} ${colors[3]}`}
      >
        <text className="text-[#184c94]">Codigo postal</text>
        <div className="flex gap-12 ">
          <div className="flex justify-items-center">
            <input
              type="text"
              className="w-20 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
            />
          </div>
          <div className="flex justify-items-center">
            <input
              type="text"
              value="Buenos Aires"
              className="p-1 px-2 rounded-lg border-l-1 text-white bg-[#184c94]"
            />
          </div>
        </div>
        <text className="text-red-900 text-sm">
          No encuentras tu codigo postal o no funciona?
        </text>
      </div>
      <div
        onClick={() => handleClick(4)}
        className={`flex gap-2 mx-12 p-8 px-32 flex-col rounded-lg border-l-4 ${borderColor[4]} ${colors[4]}`}
      >
        <div className="flex gap-24">
          <div className="flex flex-col">
            <text className="text-[#184c94]">Edad</text>
            <input
              type="text"
              className="w-20 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
            />
          </div>
          <div>
            <text className="text-[#184c94]">Genero</text>
            <div className="flex justify-items-center">
              <input
                type="radio"
                checked={isCheckedSex}
                onChange={() => setIsCheckedSex(true)}
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 border-2 border-solid"
              />
              <text className="text-[#184c94] mb-1">Masculino</text>
            </div>
            <div className="flex justify-items-center">
              <input
                type="radio"
                checked={!isCheckedSex}
                onChange={() => setIsCheckedSex(false)}
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 border-2 border-solid"
              />
              <text className="text-[#184c94] mb-1">Femenino</text>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex gap-2 mt-4 mb-8 flex-col rounded-lg bg-white`}>
        <button className="flex float-end self-end bg-green-400 hover:bg-green-500 my-4 mr-12 p-1 px-20 text-gray-700 rounded-lg">
          Comparar
        </button>
      </div>
      {/* </Form> */}
    </div>
  );
};

export default Cotizador;
