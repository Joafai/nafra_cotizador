import React from "react";

type TarjetaSeguroProps = {
  name: string;
  typeInsurance: string;
  price: number;
  amountEnsuredTitle: string;
  amountEnsuredNumber: number;
  onGoToDetail: () => void;
};

const TarjetaSeguro = (props: TarjetaSeguroProps) => {
  const {
    name,
    typeInsurance,
    price,
    amountEnsuredNumber,
    amountEnsuredTitle,
    onGoToDetail,
  } = props;

  return (
    <div className="flex flex-col items-center rounded-lg border-2 w-52 h-auto">
      <div className="flex flex-col items-center bg-[#184c94] text-white rounded-t-lg p-2 w-full">
        <span className="text-sm">{name}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-gray-700 mt-2">{typeInsurance}</span>
        <span className="text-gray-700">{price}</span>
      </div>
      <hr className="w-32 my-2 border-gray-400" />
      <div className="flex flex-col items-center">
        <span className="text-gray-700 text-xs">{amountEnsuredTitle}</span>
        <span className="text-gray-700">{amountEnsuredNumber}</span>
      </div>
      <hr className="w-32 my-2 border-gray-400" />
      <button
        onClick={onGoToDetail}
        className="border border-gray-400 bg-white-400 hover:bg-green-400 mb-4 mt-2 p-2 px-4 text-gray-700 rounded-lg"
      >
        Ver detalle
      </button>
    </div>
  );
};

export default TarjetaSeguro;
