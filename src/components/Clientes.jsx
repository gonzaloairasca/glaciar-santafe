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
          <img
            src={aristeo}
            alt="logo Aristeo cliente glaciar santa fe"
            className=""
          />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img
            src={buenSol}
            alt="logo Bueno Sol distribuidora cliente glaciar santa fe"
          />
        </div>
        <div className="w-5/12 lg:h-[300px] lg:w-[300px] flex items-center">
          <img
            src={cantabria}
            alt="logo cantabria heladeria cliente glaciar santa fe"
          />
        </div>
        <div className="w-5/12  flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={leUtthe} alt="logo le Utthe cliente glaciar santa fe " />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img
            src={monjeCoop}
            alt="logo monje cooperativa cliente glaciar santa fe"
          />
        </div>
        <div className="w-5/12 font-serif text-slate-50 lg:text-3xl font-bold text-center flex items-center justify-center lg:h-[300px] lg:w-[300px] ">
          <img src={marfig} alt="logo Marfig cliente glaciar santa fe" />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img
            src={rafaelaAlimentos}
            alt="logo Rafaela Alimentos cliente glaciar santa fe"
          />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img
            src={superLorito}
            className=""
            alt="logo Super Lorito cliente glaciar santa fe"
          />
        </div>{" "}
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img
            src={atte}
            className=""
            alt="logo ATE cliente glaciar santa fe"
          />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img src={tremblay} alt="logo Tremblay cliente glaciar santa fe" />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img
            src={intertowel}
            alt="logo Intertowel cliente Glaciar santa fe"
          />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img
            src={laLilia}
            alt="logo la lilia cabañas y tambo cliente glaciar santa fe"
          />
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px] ">
          <img
            src={dogueriaDelSud}
            alt="logo droguería del sud cliente glaciar santa fe"
          />
        </div>
        <div className="w-5/12 font-serif text-lg bg-black text-slate-50 lg:text-3xl font-bold text-center flex items-center justify-center lg:h-[300px] lg:w-[300px] ">
          <h2 className="">
            GUADALUPE <br /> CARNES
          </h2>
        </div>
        <div className="w-5/12 flex items-center lg:h-[300px] lg:w-[300px]">
          <img src={lario} alt="logo Lario Fiambres cliente glaciar santa fe" />
        </div>
      </div>
    </section>
  );
}

export default Clientes;
