import React from "react";
import nafra from "../assets/nafra3.jpeg";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-[#184c94] text-white">
      <img src={nafra.src} alt="Alternative text" width="150" height="20" />
      <div>
        <button className="flex float-end self-end border-2 bg-white border-green-400 hover:bg-green-400 my-4 mr-12 p-1 px-12 text-gray-700 rounded-lg">
          Denuncias de siniestros
        </button>
        <button className="flex float-end self-end border-2 bg-white border-green-400 hover:bg-green-400 my-4 mr-12 p-1 px-10 text-gray-700 rounded-lg">
          Atencion al cliente
        </button>
      </div>
    </header>
  );
};

export default Header;
