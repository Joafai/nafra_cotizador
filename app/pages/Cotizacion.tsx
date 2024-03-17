"use client";

import { useState } from "react";
import TarjetaSeguro from "../components/TarjetaSeguro";

export default function Cotizacion() {
  const [showResponsabilidadCivil, setShowResponsabilidadCivil] =
    useState<boolean>(false);
  const [showTerceros, setShowTerceros] = useState<boolean>(false);

  const toggleResponsabilidadCivil = () => {
    setShowResponsabilidadCivil(!showResponsabilidadCivil);
  };

  const toggleShowTerceros = () => {
    setShowTerceros(!showTerceros);
  };

  return (
    <div>
      <div className="flex justify-center bg-white h-screen p-4">
        <div
          className={`flex gap-2 mx-12 mt-36 p-4 flex-col rounded-lg border-2     bg-white`}
        >
          <h4 className="flex p-1 text-gray-800 text-3xl text-center">
            Coberturas para tu vehículo
          </h4>
          <h4
            onClick={toggleResponsabilidadCivil}
            className="flex p-1 text-gray-800 text-2xl text-center border-y-4"
          >
            <p className="text-gray-800 text-2xl text-center">
              Responsabilidad civil
            </p>
          </h4>
          {showResponsabilidadCivil ? (
            <div className="flex flex-row gap-3 justify-center">
              <TarjetaSeguro></TarjetaSeguro>
              <TarjetaSeguro></TarjetaSeguro>
              <TarjetaSeguro></TarjetaSeguro>
              <TarjetaSeguro></TarjetaSeguro>
              <TarjetaSeguro></TarjetaSeguro>
            </div>
          ) : null}
          <h4
            onClick={toggleShowTerceros}
            className="flex p-1 text-gray-800 text-2xl text-center border-y-4"
          >
            <p className="text-gray-800 text-2xl text-center">Terceros</p>
          </h4>
          {showTerceros ? (
            <div className="flex flex-row gap-3 justify-center">
              <TarjetaSeguro></TarjetaSeguro>
              <TarjetaSeguro></TarjetaSeguro>
              <TarjetaSeguro></TarjetaSeguro>
              <TarjetaSeguro></TarjetaSeguro>
              <TarjetaSeguro></TarjetaSeguro>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
