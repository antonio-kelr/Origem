import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Rodape from "../rodape/rodape";
import Origem from "../../img/nova-logo-pl1qfrzfpgkc01s46bfhppm1q9s0a76si0qv6stngg.png";
import "./index.css";
import { Outlet, useLocation } from "react-router-dom";

const index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Obter a localização atual
  const location = useLocation();

  // Mapear títulos por rota
  const routeTitles: { [key: string]: string } = {
    "/": "Home",
    "/quem-samos": "Quem Somos",
    "/produtos": "Produtos",
    "/contato": "Contato",
  };

  // Atualizar o título da página dinamicamente
  useEffect(() => {
    const currentTitle = routeTitles[location.pathname] || "Título Padrão";
    document.title = currentTitle;
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Fecha o menu se o clique for fora do componente
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="home-site quem_samos">
        <header className="header">
          <div className="header-info header-info_quem_samos">
          <a href="https://wa.me/98984158711" target="_blank"  rel="noopener noreferrer">
              <i>
                <FaPhoneAlt />
              </i>{" "}
              Serra: (27) 3228-0015
            </a>
            <i>|</i>
            <a href="https://wa.me/98984158711" target="_blank"  rel="noopener noreferrer">
              <i>
                <FaPhoneAlt />
              </i>{" "}
              Cariacica: (27) 3336-5826
            </a>
            <i>|</i>
            <a  href="https://wa.me/98984158711" target="_blank"  rel="noopener noreferrer">
              <i>
                <FaWhatsapp />
              </i>{" "}
              (27) 99716-0214
            </a>
          </div>
          <nav className="navbar">
            <img
              src={Origem}
              alt="Origem - aço e metais sob medida"
              className="logo"
            />
            <div>
              <a className="home" href="/">
                Home
              </a>
              <a href="quem-samos">Quem Somos</a>
              <a href="produtos">Produtos</a>
              <a href="contato">Contato</a>

              <span onClick={toggleMenu}>
                <FontAwesomeIcon
                  icon={faAlignJustify}
                  className="faAlignJustify"
                />
              </span>
            </div>
          </nav>
          {/* Menu móvel com a classe condicional */}
          <div
            ref={menuRef}
            className={`div-mobile ${menuOpen ? "abri-menu" : ""}`}
          >
            <a className="home" href="/">
              Home
            </a>
            <a href="quem-samos">Quem Somos</a>
            <a href="produtos">Produtos</a>
            <a href="contato">Contato</a>
          </div>
        </header>
        <div className="hero-section">
          <div className="overlay overlay_quem_samos"></div>
          <div className="img_hero img_quem_samos"></div>

          <div className="hero-content">
            <div className="hero-text hero-quem_samos">
              <h1 className="title_hero-content">
                {routeTitles[location.pathname]}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Outlet /> {/* Renderiza as rotas filhas */}
      <Rodape />
    </>
  );
};

export default index;
