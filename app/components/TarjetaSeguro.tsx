import React from "react";
import nafra from "../assets/nafra3.jpeg";

const TarjetaSeguro: React.FC = () => {
  return (
    <div className="flex flex-col items-center rounded-lg border-2 w-52 h-auto">
      <div className="flex flex-col items-center bg-[#184c94] text-white rounded-t-lg p-2 w-full">
        <span className="text-sm">Nombre de la aseguradora</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-gray-700 mt-2">terceros completo</span>
        <span className="text-gray-700">$32000</span>
      </div>
      <hr className="w-32 my-2 border-gray-400" />
      <div className="flex flex-col items-center">
        <span className="text-gray-700 text-xs">suma asegurada</span>
        <span className="text-gray-700">$23000</span>
      </div>
      <hr className="w-32 my-2 border-gray-400" />
      <button className="border border-gray-400 bg-white-400 hover:bg-green-400 mb-4 mt-2 p-2 px-4 text-gray-700 rounded-lg">
        Ver detalle
      </button>
    </div>
  );
};

export default TarjetaSeguro;
