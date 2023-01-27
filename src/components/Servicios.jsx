import React from "react";

function Servicios() {
  return (
    <section
      className="bg-dark-blue text-light-blue scroll-m-20 "
      id="servicios"
    >
      <div className="container lg:w-5/6 m-auto">
        <h2 className="text-3xl font-semibold w-10/12 m-auto pt-8 pb-6 lg:w-full lg:pl-4 lg:text-4xl lg:py-12">
          NUESTROS <br className="lg:hidden" />
          SERVICIOS
        </h2>
        <ul className="text-2xl font-bold w-10/12 m-auto pb-8 lg:flex lg:flex-wrap lg:w-full  lg:text-[30px] xl:text-4xl ">
          <li className="bg-[url('./assets/servicios/reparacion.jpg')] bg-center bg-cover my-4 lg:w-5/12 lg:flex-auto lg:h-28 lg:mx-4 ">
            <div className="blur-shadow py-3 px-4 h-full flex items-center  ">
              <h3>Reparación</h3>
            </div>
          </li>
          <li className="bg-[url('./assets/servicios/instalacion.png')] bg-center bg-cover my-4 lg:w-5/12 lg:flex-auto lg:mx-4">
            <div className="blur-shadow py-3 px-4 h-full  flex items-center  lg:h-28">
              <h3> Instalación de sistemas de refrigeración</h3>
            </div>
          </li>
          <li className="bg-[url('./assets/servicios/balance.jpg')] bg-bottom bg-cover my-4 lg:w-5/12 lg:flex-auto lg:mx-4">
            <div className="blur-shadow py-3 px-4 h-full  flex items-center  lg:h-28">
              <h3> Balance térmico</h3>
            </div>
          </li>
          <li className="bg-[url('./assets/servicios/montaje.jpg')] bg-bottom bg-cover my-4 lg:w-5/12 lg:flex-auto lg:mx-4">
            <div className="blur-shadow py-3 px-4 h-full  flex items-center  lg:h-28">
              <h3> Montaje de instalaciones frigoríficas</h3>
            </div>
          </li>
          <li className="bg-[url('./assets/servicios/mantenimiento.jpg')] bg-center bg-cover my-4 lg:w-5/12 lg:flex-auto lg:mx-4">
            <div className="blur-shadow py-3 px-4 h-full  flex items-center  lg:h-28">
              <h3> Mantenimiento correctivo preventivo</h3>
            </div>
          </li>
          <li className="bg-[url('./assets/servicios/mantenimiento.jpg')] bg-center bg-cover my-4 lg:w-5/12 lg:flex-auto lg:mx-4">
            <div className="blur-shadow py-3 px-4 h-full  flex items-center  lg:h-28">
              <h3> Mantenimiento correctivo preventivo</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Servicios;
