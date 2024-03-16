"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cotizador from "./components/Cotizador";
import AtencionAlCliente from "./AtencionAlCliente";
import Cotizacion from "./Cotizacion";
import DenunciaDeSiniestro from "./DenunciaDeSinestro";

export default function Home() {
  return (
    <main>
      <div className="bg-white h-screen">
        <Header></Header>
        <Cotizador></Cotizador>
        {/* <AtencionAlCliente></AtencionAlCliente> */}
        {/* <DenunciaDeSiniestro></DenunciaDeSiniestro> */}
        {/* <Cotizacion></Cotizacion> */}
      </div>
      <Footer></Footer>
    </main>
  );
}
