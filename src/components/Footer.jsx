import React from "react";
import logoAzul from "../assets/icons/logoGlaciarBgBlanco.png";
import instalgram from "../assets/icons/instagram-logo.svg";
import facebook from "../assets/icons/facebook.svg";
import wsp from "../assets/icons/whatsapp-blanco.svg";

function Footer() {
  return (
    <footer className="bg-dark-blue flex flex-col items-center text-light-blue">
      <img className="pt-4" src={logoAzul} alt="logo glaciar" />
      <h3 className="pt-3 pb-3 text-lg sombraFuerte">
        Calle 1era Junta 4040, Santa Fe.
      </h3>
      <ul className="flex gap-8 py-4">
        <li>
          <a href="https://api.whatsapp.com/send?phone=+5493426149190&text=Hola,%20quiero%20realizar%20una%20consulta">
            <img src={wsp} alt="icono wsp" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/glaciarsantafe/" target="_blank">
            <img src={instalgram} alt="icono instagram" />
          </a>
        </li>

        <li>
          <a href="https://www.facebook.com/Glaciarsantafe/" target="_blank">
            <img src={facebook} alt="icono facebook" />
          </a>
        </li>
      </ul>
      <p className="text-xs py-3">
        Diseñado y desarrollado por
        <a href="gonzaloairascaweb.com.ar" target="_blank">
          {" "}
          Gonzalo Airasca Web
        </a>
      </p>
    </footer>
  );
}

export default Footer;
