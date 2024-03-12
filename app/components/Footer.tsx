import React from "react";
import nafra from "../assets/nafra3.jpeg";

const Footer: React.FC = () => {
  return (
    <footer className="fixed top-0 left-0 right-0 flex items-center justify-between bg-[#184c94] text-white">
      <img src={nafra.src} alt="Alternative text" width="150" height="20" />
      <div>
        <button className="flex float-end self-end bg-green-400 hover:bg-green-500 my-4 mr-12 p-1 px-20 text-gray-700 rounded-lg">
          Comparar
        </button>
        <button className="flex float-end self-end bg-green-400 hover:bg-green-500 my-4 mr-12 p-1 px-20 text-gray-700 rounded-lg">
          Comparar
        </button>
      </div>
    </footer>
  );
};

export default Footer;
