import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import emailIcon from "../assets/icons/email.svg";
import wsp from "../assets/icons/whatsapp.svg";
import celu from "../assets/icons/celu.svg";
import celuAzul from "../assets/icons/telefono-azul.svg";
import ubicacionAzul from "../assets/icons/ubicacion-azul.svg";
import emailIconAzul from "../assets/icons/email-azul.svg";
import ubicacion from "../assets/icons/ubicacion.svg";

function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <section
      className="text-text-blue flex flex-col items-center scroll-m-20 lg:flex-row lg:justify-center "
      id="contacto"
    >
      <form
        name="formulario-de-contacto"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        className="bg-white pt-4 pb-10 px-6 sm:max-w-md w-full lg:w-1/2 "
      >
        <h2 className="text-3xl font-bold py-8">CONTACTO</h2>
        <input type="hidden" name="form-name" value="formulario-de-contacto" />
        <label htmlFor="user_name">Nombre:</label>
        <input
          required
          className="focus:outline-none bg-[#D9D9D9] w-full pb-2 my-3 pt-1 pl-2 placeholder-gray-500"
          type="text"
          name="nombre"
          placeholder="Nombre y Apellido"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="user_email">Email:</label>
        <input
          required
          type="email"
          name="email"
          placeholder="ejemplo@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="focus:outline-none w-full pb-2 pt-1 pl-2 my-3 bg-[#D9D9D9] placeholder-gray-500"
        />
        <label htmlFor="message" className="">
          Consulta:
        </label>
        <textarea
          required
          name="consulta"
          onChange={(e) => setConsulta(e.target.value)}
          value={consulta}
          placeholder="Escriba aqui su consulta"
          className="focus:outline-none border  w-full pb-16 px-3 pt-2 bg-[#D9D9D9] placeholder-gray-500 my-3"
        />
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="   p-3 w-full sm:w-56  bg-dark-blue  hover:bg-text-blue text-white text-lg font-semibold "
        >
          Enviar consulta
        </button>
      </form>

      <div className="bg-dark-blue text-light-blue w-full flex flex-col items-center lg:w-1/2 lg:bg-white lg:text-dark-blue ">
        <div className="py-7 max-w-xs m-auto w-11/12 lg:pt-20">
          <div className="flex gap-3 items-center">
            <img
              className=""
              src={window.screen.width < 1024 ? emailIcon : emailIconAzul}
              alt="icono email"
            />
            <h3 className="text-[20px] font-regular">
              glaciarsantafe@gmail.com
            </h3>
          </div>
          <div className="flex items-center gap-3 py-6">
            <img
              className="ml-1"
              src={window.screen.width < 1024 ? celu : celuAzul}
              alt="icono email"
            />
            <h3 className="text-[20px] font-regular">(342) - 6149190</h3>
          </div>
          <div className="flex gap-3 items-center pb-10">
            <img
              className="h-12 ml-px"
              src={window.screen.width < 1024 ? ubicacion : ubicacionAzul}
              alt="icono email"
            />
            <h3 className="text-[20px] font-regular">
              Calle Primera Junta Nro. 4040, Santa Fe.
            </h3>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=+5493426149190&text=Hola,%20quiero%20realizar%20una%20consulta"
            target="_blank"
          >
            <button className="flex items-center w-full  bg-light-blue text-text-blue px-3 py-2 text-xl lg:bg-dark-blue lg:text-light-blue lg:flex-row-reverse lg:justify-end lg:pl-2 lg:w-auto lg:rounded-lg">
              Consultar por WhatsApp
              <img
                className="ml-1 lg:m-0 lg:mr-2"
                src={wsp}
                alt="icon whatsapp"
              />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
