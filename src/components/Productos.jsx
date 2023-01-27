import React from "react";
import unidadCondensadora from "../assets/productos/iguales/unidad-condensadora-izq.jpg";
import contenedor from "../assets/productos/contenedor-izq.png";
import aireAcondicionado from "../assets/productos/iguales/aire-acondicionado-pisotecho.png";
import camaraDeFrio from "../assets/productos/camara-de-frio.jpg";
import centralDeFrio from "../assets/productos/iguales/central-de-frio.png";
import multiSplit from "../assets/productos/iguales/multi-split-izq.png";
import aAcondicionadoCentral from "../assets/productos/iguales/aire-acondicionado-central-izq.png";

function Productos() {
  return (
    <section className="text-text-blue scroll-m-20" id="productos">
      <div className="lg:w-5/6 lg:m-auto lg:pb-8">
        <h2 className="text-3xl font-bold pt-10 pb-6 pl-6">PRODUCTOS</h2>
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:flex-wrap lg:gap-4 ">
          <div className="pt-4 max-w-sm  xl:w-3/12  lg:flex-auto">
            <img
              className="w-10/12 m-auto"
              src={unidadCondensadora}
              alt="unidad condensadora refrigeración"
            />
            <div className="lg:h-44">
              <h3 className="text-2xl mt-4 ml-8">Unidad condensadora</h3>
              <ul className="ml-16 mt-3 list-disc w-4/6 text-lg">
                <li>Compresores hermeticos/ semi herméticos y scroll.</li>
                <li>Media y baja temperatura.</li>
                <li>Protección de alta y baja presión.</li>
              </ul>
            </div>
            <hr className="w-20 ml-8 mt-8 h-[3px] bg-dark-blue" />
          </div>

          <div className="pt-4 max-w-sm  xl:w-3/12    lg:flex-auto ">
            <img
              className="w-10/12 m-auto"
              src={centralDeFrio}
              alt="unidad condensadora refrigeración"
            />
            <div className="lg:h-44">
              <h3 className="text-2xl mt-4 ml-8">Central de frío</h3>
              <ul className="ml-16 mt-3 list-disc w-4/6 text-lg">
                <li>Compresores alternativos y scroll.</li>
                <li>Separador de aceite</li>
                <li>Automatización completa.</li>
              </ul>
            </div>
            <hr className="w-20 ml-8 mt-8 h-[3px] bg-dark-blue" />
          </div>

          <div className="pt-8 max-w-sm lg:pt-4  xl:w-3/12  lg:flex-auto  ">
            <img
              className="w-10/12 m-auto"
              src={aAcondicionadoCentral}
              alt="unidad condensadora refrigeración"
            />
            <div className="lg:h-44">
              <h3 className="text-2xl ml-8 mt-4 w-10/12">
                Aire acondicionado central
              </h3>
              <ul className="ml-16 mt-3 list-disc w-4/6 text-lg">
                <li>Ideal para comercios e industrias.</li>
                <li>Gran rendimiento.</li>
              </ul>
            </div>
            <hr className="w-20 ml-8 mt-8 h-[3px] bg-dark-blue" />
          </div>
          <div className="pt-8 max-w-sm lg:pt-4 xl:w-3/12  lg:flex-auto ">
            <img
              className="w-10/12 m-auto"
              src={multiSplit}
              alt="unidad condensadora refrigeración"
            />
            <div className="lg:h-44">
              <h3 className="text-2xl mt-4 ml-8">Multi Split</h3>
              <ul className="ml-16 mt-3 list-disc w-4/6 text-lg">
                <li>
                  Sistemas eficientes y de presicion para múltiples espacios.
                </li>
              </ul>
            </div>
            <hr className="w-20 ml-8 mt-8 h-[3px] bg-dark-blue" />
          </div>
          <div className="pt-8 max-w-sm lg:pt-4 xl:w-3/12 lg:flex-auto ">
            <img
              className="w-10/12 m-auto"
              src={aireAcondicionado}
              alt="unidad condensadora refrigeración"
            />
            <div className="lg:h-44">
              <h3 className="text-2xl mt-4 ml-8">
                Aire acondicionado split piso techo
              </h3>
              <ul className="ml-16 mt-3 list-disc w-4/6 text-lg">
                <li>Eficiencia energética.</li>
                <li>
                  Posibilidad de instalación en piso (posición vertical) como en
                  techo (posición horizontal)
                </li>
              </ul>
            </div>
            <hr className="w-20 ml-8 mt-8 h-[3px] bg-dark-blue" />
          </div>
          <div className="pt-8 pb-8 max-w-sm  xl:w-3/12  lg:flex-auto lg:pb-0 lg:pt-4">
            <img
              className="w-10/12 m-auto"
              src={centralDeFrio}
              alt="unidad condensadora refrigeración"
            />
            <div className="lg:h-44">
              <h3 className="text-2xl mt-4 ml-8">Unidad condensadora</h3>
              <ul className="ml-16 mt-3 list-disc w-4/6 text-lg lg:w-5/6">
                <li>Compresores hermeticos/ semi herméticos y scroll.</li>
                <li>Media y baja temperatura.</li>
                <li>Protección de alta y baja presión.</li>
              </ul>
            </div>
            <hr className="w-20 ml-8 mt-8 h-[3px] bg-dark-blue hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productos;
