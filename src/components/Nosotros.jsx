import React from "react";

function Nosotros() {
  return (
    <section
      className="text-text-blue pb-10 lg:pb-14 scroll-m-24"
      id="nosotros"
    >
      <div className="container lg:w-5/6 m-auto">
        <h2 className="font-semibold text-[28px] ml-8 mt-8 mb-6 lg:text-4xl lg:pt-8 lg:pb-6 ">
          ¿QUIÉNES <br className="md:hidden" /> SOMOS?
        </h2>
        <p className="text-2xl w-10/12 ml-8 lg:w-full">
          Glaciar es el aliado de confianza al servicio de su cadena de frío, la
          seguridad del funcionamiento de sus equipos de climatización y la
          garantía de calidad para la continuidad de sus procesos productivos.
        </p>
        <p className="text-2xl w-10/12 ml-8 mt-4 hidden md:inline-block lg:w-full">
          Un sueño del año 2008 que buscando los mejores frutos transitó los
          caminos de la experiencia a la par de los mejores profesionales y
          empresas del rubro, capacitándonos así para no perder detalles al
          momento de brindar el mejor servicio en refrigeración comercial,
          industrial y aire acondicionado.
        </p>
        <p className="text-2xl w-10/12 ml-8 mt-4 hidden md:inline-block lg:w-full">
          Logrando a partir del año 2018 contar con Nombre y espacio propio,
          personal altamente capacitado y el compromiso intacto para quienes
          requieren atención en tan delicada área.
        </p>
      </div>
    </section>
  );
}

export default Nosotros;
