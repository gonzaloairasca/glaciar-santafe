import React from "react";
import aristeo from "../assets/clientes/aristeo.jpg";
import buenSol from "../assets/clientes/buensol.png";
import cantabria from "../assets/clientes/cantabria.jpeg";
import leUtthe from "../assets/clientes/leUhtthe.png";
import monjeCoop from "../assets/clientes/monjeCoop.jpeg";
import rafaelaAlimentos from "../assets/clientes/rafaelaAlimentos.jpeg";
import superLorito from "../assets/clientes/superLorito.jpeg";
import tremblay from "../assets/clientes/tremblay-mejorada.png";
import lario from "../assets/clientes/lario.jpeg";
import atte from "../assets/clientes/atte.jpeg";
import marfig from "../assets/clientes/marfig.png";
import laLilia from "../assets/clientes/laLilia.jpeg";
import dogueriaDelSud from "../assets/clientes/drogueriaDelSud.png";
import intertowel from "../assets/clientes/intertowel.jpeg";

function Clientes() {
  return (
    <section
      id="clientes"
      className="bg-dark-blue text-light-blue scroll-m-20 lg:pb-10"
    >
      <h2 className="text-2xl font-bold text-center pt-8 lg:text-4xl lg:pt-12 lg:pb-6">
        CONFÍAN EN NOSOTROS
      </h2>
      <div className="flex flex-wrap gap-4 justify-center  py-8 lg:gap-1 lg:w-5/6 lg:m-auto lg:justify-around">
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={aristeo} alt="" className="" />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={buenSol} alt="" />
        </div>
        <div className="w-5/12 lg:h-[300px] lg:w-[300px] flex items-center">
          <img src={cantabria} alt="" />
        </div>
        <div className="w-5/12  flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={leUtthe} alt="" />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={monjeCoop} alt="" />
        </div>
        <div className="w-5/12 font-serif text-slate-50 lg:text-3xl font-bold text-center flex items-center justify-center lg:h-[300px] lg:w-[300px] ">
          <img src={marfig} alt="" />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={rafaelaAlimentos} alt="" />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={superLorito} className="" alt="" />
        </div>{" "}
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={atte} className="" alt="" />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={tremblay} alt="" />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={intertowel} alt="" />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={laLilia} alt="" />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={dogueriaDelSud} alt="" />
        </div>
        <div className="w-5/12 font-serif text-lg bg-black text-slate-50 lg:text-3xl font-bold text-center flex items-center justify-center lg:h-[300px] lg:w-[300px] ">
          <h2 className="">
            GUADALUPE <br /> CARNES
          </h2>
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px]">
          <img src={lario} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Clientes;
