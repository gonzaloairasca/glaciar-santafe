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
          <img src={wsp} alt="icono wsp" />
        </li>
        <li>
          <img src={instalgram} alt="icono instagram" />
        </li>

        <li>
          <img src={facebook} alt="icono facebook" />
        </li>
      </ul>
      <p className="text-xs py-3">
        Diseñado y desarrollado por
        <a href="gonzaloairascaweb.com.ar">Gonzalo Airasca Web</a>
      </p>
    </footer>
  );
}

export default Footer;
