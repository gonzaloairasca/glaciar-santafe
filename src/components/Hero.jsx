import React from "react";

function Hero() {
  return (
    <main className="h-screen hero text-white">
      <div className="container pl-5 h-full flex flex-col justify-center items-start lg:pl-10 lg:pt-10">
        <h1 className="text-[40px] font-bold  leading-normal sombra sm:text-[55px] sm:leading-none lg:text-[70px] xl:text-[90px] xl:leading-none ">
          Refrigeración industrial <br className="hidden md:block" /> y{" "}
          <br className="sm:hidden" />
          comercial
        </h1>
        <h3 className="opacity-80 font-regular text-[19px] sombraFuerte sm:text-xl sm:mt-5 lg:text-2xl lg:mt-8 lg:mb-4">
          Calle 1era Junta 4040, <br className="lg:hidden" /> Santa Fe.
        </h3>
        <a href="#nosotros">
          <button className="text-3xl mt-4 bg-dark-blue py-2 rounded-xl px-2 border-b-2 border-b-white hover:bg-text-blue sm:text-4xl lg:text-4xl lg:px-4 lg:py-3">
            Conocenos
          </button>
        </a>
      </div>
    </main>
  );
}

export default Hero;
