import React from "react";
import { useState } from "react";
import glaciarLogo from "../assets/icons/logo-azul.png";
import menu from "../assets/icons/menu.svg";

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <header className="flex justify-between  text-cyan-50 fixed top-0 left-0 right-0 bg-white  z-50">
      <a href="#">
        <img
          src={glaciarLogo}
          alt="logo de Glaciar Refrigeración Santa fe"
          className="ml-2 mb-4 h-16 rounded-lg"
        />
      </a>
      <ul className=" hidden md:flex md:gap-4 md:mr-6 md:items-center md:text-text-blue">
        <li>
          <a href="#nosotros">NOSOTROS</a>
        </li>
        <li>
          <a href="#servicios">SERVICIOS</a>
        </li>
        <li>
          <a href="#productos">PRODUCTOS</a>
        </li>
        <li>
          <a href="#clientes">CLIENTES</a>
        </li>
        <li>
          <a href="#contacto">CONTACTO</a>
        </li>
      </ul>
      <img
        className="mr-4 mt-7 h-8 md:hidden"
        src={menu}
        onClick={() => setNav(!nav)}
      />
      <nav
        className={
          nav
            ? "fixed right-0 top-20 font-semibold bg-dark-blue text-xl md:hidden"
            : "hidden"
        }
      >
        <ul className="text-slate-50 mr-3">
          <li className="m-3" onClick={() => setNav(false)}>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li className="m-3" onClick={() => setNav(false)}>
            <a href="#servicios">Servicios</a>
          </li>
          <li className="m-3" onClick={() => setNav(false)}>
            <a href="#productos">Productos</a>
          </li>
          <li className="m-3" onClick={() => setNav(false)}>
            <a href="#clientes">Nuestros clientes</a>
          </li>
          <li className="m-3" onClick={() => setNav(false)}>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
