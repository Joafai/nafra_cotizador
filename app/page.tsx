"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cotizador from "./pages/Cotizador";
import AtencionAlCliente from "./pages/AtencionAlCliente";
import Cotizacion from "./pages/Cotizacion";
import DenunciaDeSiniestro from "./pages/DenunciaDeSinestro";

export default function Home() {
  return (
    <main>
      <div className="bg-white h-screen">
        <Header></Header>
        <Cotizador></Cotizador>
        {/* <AtencionAlCliente></AtencionAlCliente> */}
        {/* <DenunciaDeSiniestro></DenunciaDeSiniestro> */}
        {/* <Cotizacion></Cotizacion> */}
        <Footer></Footer>
      </div>
    </main>
  );
}
