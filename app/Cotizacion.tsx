"use client";

import TarjetaSeguro from "./components/TarjetaSeguro";

export default function Cotizacion() {
  return (
    <div>
      <div className="flex justify-center bg-white h-screen p-4">
        <div
          className={`flex gap-2 mx-12 mt-36 p-4 justify-center flex-col rounded-lg border-2     bg-white`}
        >
          <h4 className="flex p-1 text-gray-800 text-3xl text-center">
            Coberturas para tu vehículo
          </h4>
          <h4 className="flex p-1 text-gray-800 text-2xl text-center">
            Responsabilidad civil
          </h4>
          <div className="flex flex-row gap-3 justify-center">
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
          </div>
          <h4 className="flex p-1 text-gray-800 text-2xl text-center">
            Terceros completo
          </h4>
          <div className="flex flex-row gap-3 justify-center">
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
          </div>
        </div>
      </div>
    </div>
  );
}
