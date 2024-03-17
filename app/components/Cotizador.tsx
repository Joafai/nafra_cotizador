import React, { useState } from "react";
import nafra from "../assets/nafra3.jpeg";
import { z } from "zod";
// import { zodResolver } from "@hookform/resolver/zod";
import { Form, useForm } from "react-hook-form";
import { GetServerSideProps } from "next";
import { Select } from "./Select";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const Cotizador: React.FC = () => {
  const [isCheckedGNC, setIsCheckedGNC] = useState(false);
  const [isCheckedSex, setIsCheckedSex] = useState(false);
  const [isKmChecked, setIsKmChecked] = useState(false);

  const [colors, setColors] = useState([
    "bg-blue-100",
    "bg-gray-100",
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
    "border-gray-300",
  ]);

  const [showCarHelper, setShowCarHelper] = useState<boolean>(false);
  const [show0KmHelper, setShow0KmHelper] = useState<boolean>(false);

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

    if (index === 0 || index === 1) {
      setShowCarHelper(true);
    } else {
      setShowCarHelper(false);
    }

    if (index === 2 || index === 3) {
      setShow0KmHelper(true);
    } else {
      setShow0KmHelper(false);
    }
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
      <div className="w-full">
        {/* <Form> */}
        <div style={{ position: "relative" }}>
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
            <text className="text-[#184c94]">¿Cero KM?</text>
            <div className="flex flex-col gap-3 pl-6">
              <div className="flex justify-items-center">
                <input
                  type="radio"
                  checked={isKmChecked}
                  onChange={() => setIsKmChecked(true)}
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 border-2 border-solid"
                />
                <text className="text-[#184c94] mb-1">
                  Sí, es nuevo (con Certificado de No Rodamiento)
                </text>
              </div>
              <div className="flex justify-items-center">
                <input
                  type="radio"
                  checked={!isKmChecked}
                  onChange={() => setIsKmChecked(false)}
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 border-2 border-solid"
                />
                <text className="text-[#184c94] mb-1">No, es usado</text>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick(3)}
            className={`flex gap-2 mx-12 p-8 px-32 flex-col rounded-lg border-l-4 ${borderColor[3]} ${colors[3]}`}
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
            className={`custom-shape bg-green-500 bg-opacity-70 text-gray-700 rounded-lg`}
            style={{
              position: "absolute",
              top: 20,
              right: 120,
              width: "450px",
              height: "340px",
              zIndex: 9999,
              padding: 9,
              opacity: showCarHelper ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <h2
              className="text-lg font-bold"
              style={{ textAlign: "justify", padding: "5px" }}
            >
              Hola, Gracias por visitarnos!
            </h2>
            <h2
              className="text-lg"
              style={{ textAlign: "justify", padding: "5px" }}
            >
              Encontrá tu modelo de auto
            </h2>
            <p style={{ textAlign: "justify", padding: "5px" }}>
              ¿Por qué pedimos esto? Necesitamos conocer exactamente cuál es el
              modelo de tu auto para que la aseguradora cotice con un valor
              preciso. Escribí las primeras 3 letras del modelo de tu auto y
              aparecerá un listado de vehículos para que selecciones.
            </p>
            <h2
              className="text-lg font-bold"
              style={{ textAlign: "justify", padding: "5px" }}
            >
              ¿Cómo lo busco?
            </h2>
            <p style={{ textAlign: "justify", padding: "5px" }}>
              Escribí las primeras 3 letras del modelo de tu auto y aparecerá un
              listado de vehículos para que selecciones.
            </p>
          </div>
          <div
            className={`custom-shape bg-green-500 bg-opacity-70 text-gray-700 rounded-lg`}
            style={{
              position: "absolute",
              top: 269,
              right: 120,
              width: "450px",
              height: "180px",
              zIndex: 9999,
              padding: 9,
              opacity: show0KmHelper ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <h2
              className="text-lg font-bold"
              style={{ textAlign: "justify", padding: "5px" }}
            >
              Cero KM
            </h2>

            <p style={{ textAlign: "justify", padding: "5px" }}>
              Se considera cero km cuando contas con un certificado de No
              Rodamiento el cual debe ser del día de la fecha, con firma y sello
              de la agencia/concesionaria. En caso de no tener la documentación
              elegir NO.
            </p>
          </div>
          <div
            onClick={() => handleClick(4)}
            className={`flex gap-2 mx-12 p-8 px-32 flex-col rounded-lg border-l-4 ${borderColor[4]} ${colors[4]}`}
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
            onClick={() => handleClick(5)}
            className={`flex gap-2 mx-12 p-8 px-32 flex-col rounded-lg border-l-4 ${borderColor[5]} ${colors[5]}`}
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
        </div>
        <div className={`flex gap-2 flex-col rounded-lg bg-white`}>
          <button className="flex float-end self-end bg-green-400 hover:bg-green-500 my-8 mr-12 p-1 px-20 text-gray-700 rounded-lg">
            Comparar
          </button>
        </div>
      </div>
      {/* </Form> */}
    </div>
  );
};

export default Cotizador;
