import React from "react";
import adidas from "../assets/clientes/adidas.png";

function Clientes() {
  return (
    <section className="bg-dark-blue text-light-blue scroll-m-20 lg:pb-10">
      <h2 className="text-2xl font-bold text-center pt-8 lg:text-4xl lg:pt-12 lg:pb-6">
        CONFÍAN EN NOSOTROS
      </h2>
      <div className="flex flex-wrap gap-1 justify-center py-8 lg:gap-3 lg:w-4/6 lg:m-auto lg:justify-around">
        <img src={adidas} alt="" className="w-5/12 lg:h-60 lg:w-auto" />
        <img src={adidas} alt="" className="w-5/12 lg:h-60 lg:w-auto" />
        <img src={adidas} alt="" className="w-5/12 lg:h-60 lg:w-auto " />
        <img src={adidas} alt="" className="w-5/12 lg:h-60 lg:w-auto " />
        <img src={adidas} alt="" className="w-5/12 lg:h-60 lg:w-auto" />
        <img src={adidas} alt="" className="w-5/12 lg:h-60 lg:w-auto" />
      </div>
    </section>
  );
}

export default Clientes;
