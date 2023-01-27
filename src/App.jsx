import "./App.css";
import Clientes from "./components/Clientes";
import Contacto from "./components/Contacto";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import Servicios from "./components/Servicios";
import Mapa from "./components/Mapa";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Nosotros />
      <Servicios />
      <Productos />
      <Clientes />
      <Contacto />
      <Mapa />
      <Footer />
    </>
  );
}

export default App;
