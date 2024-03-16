import React from "react";
import nafra from "../assets/nafra.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#184c94] text-white">
      <div className="container mx-auto flex items-center gap-20">
        <img src={nafra.src} alt="logo" width="200" height="200" />
        <div className="flex items-center">
          <a href="https://www.nafra.com.ar">
            <button className=" my-4 mr-4 p-1 px-4 text-white rounded-lg">
              www.nafra.com.ar
            </button>
          </a>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/NafraBrokers">
              <img src={facebook.src} alt="facebook" width="50" height="30" />
            </a>
            <a href="https://www.instagram.com/nafrabrokers/">
              <img src={instagram.src} alt="instagram" width="50" height="30" />
            </a>
          </div>
          <button className=" my-4 mr-4 p-1 px-4 text-white rounded-lg">
            Tel. 011-6091-0787
          </button>
          <a
            href="mailto:info@nafra.com.ar"
            className="my-4 mr-4 p-1 px-4 text-white rounded-lg"
          >
            info@nafra.com.ar
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
