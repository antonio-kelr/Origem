import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Solda from "../../img/solda-300x295.jpg";
import imagem from "../../img/image12065.jpg";
import latao from "../../img/mat-latao-pl6vgdao0ubk1slwsnzczcomufnopv7h8sogv2ipq0.jpg";
import latao1 from "../../img/pngegg-pl6p4ffmp6aclzpdt4ybbvekwn5c48arwlfl9ghmm0.png";
import latao2 from "../../img/pngwing.com-1-pl6u98haej9v9z9go0rok8j5hw9bhvywnayc1yh394.png";
import latao3 from "../../img/fornecedor-de-tubo-de-bronze_10109_324454_1586883390307_cover-removebg-preview-pl6ymwwmv14gv484xofoby3svt2xq0xxbqnl7yolh4.png";
import latao4 from "../../img/chapa-de-celeron-industrial-01-1-pl6zdguhxjh2ujnkvnn99qvl0o7867cxz64eadb7p4.png";
import Aluminio from "../../img/produto-aluminio.png";
import Rodape from "../rodape/rodape";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";

import Origem from "../../img/nova-logo-pl1qfrzfpgkc01s46bfhppm1q9s0a76si0qv6stngg.png";
import { useEffect, useRef, useState } from "react";
import Produto from "../produto/produto";

const Home = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const duration = 2000; // Duração total em milissegundos (2 segundos, agora um pouco mais rápido)
  const steps = 100; // Número de etapas para alcançar o valor final

  // Cálculo dos incrementos necessários para que ambos cheguem ao final juntos
  const increment1 = 30 / steps; // Incremento para o contador 1 (30+)
  const increment2 = 3500 / steps; // Incremento para o contador 2 (3500)

  useEffect(() => {
    const intervalTime = duration / steps; // Define o intervalo entre cada atualização

    const interval = setInterval(() => {
      setCount1((prev) => Math.min(prev + increment1, 30)); // Incrementa até 30
      setCount2((prev) => Math.min(prev + increment2, 3500)); // Incrementa até 3500
    }, intervalTime);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);
  useEffect(() => {
    AOS.init(); // Inicializando o AOS
  }, []);

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
    <div className="container-origem">
      <section className="home-site">
        <header className="header">
          <div className="header-info">
            <a href="https://wa.me/98984158711" target="_blank"  rel="noopener noreferrer">
              <i>
                <FaPhoneAlt />
              </i>{" "}
              Serra: (27) 3228-0015
            </a>
            <i>|</i>
            <a  href="https://wa.me/98984158711" target="_blank"  rel="noopener noreferrer">
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
            <a href="quem-samos">Quem Somos</a>
            <a href="produtos">Produtos</a>
            <a href="#">Produtos</a>
            <a href="contato">Contato</a>

          </div>
        </header>
        <div className="hero-section">
          <img src={imagem} alt="" className="img_hero" />
          <div className="overlay"></div>

          <div className="hero-content">
            <div className="hero-text">
              <h1 className="title_hero-content">AÇOS E METAIS SOB MEDIDA</h1>
              <p className="text_hero">
                Estamos preparados para atender todo o mercado capixaba, atuamos
                na comercialização de uma grande variedade de produtos
                industriais, metalúrgicos, siderúrgicos, hidráulicos,
                alimentícios, moveleiros, navais, entre outros.
              </p>
              <div>
                <button className="btn-more">
                  Saiba Mais{" "}
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    style={{ fontSize: "12px" }}
                  />
                </button>
              </div>
            </div>
            <div className="img_herp_content">
              <img src={Aluminio} alt="" />
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h2>{Math.round(count1)}+</h2>
                <p>Anos de experiência</p>
              </div>
              <div className="stat-item">
                <h2>{Math.round(count2).toLocaleString("pt-BR")}+</h2>
                <p>Itens de produtos</p>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      <main className="conteudo-principal">
        <section>
          <div className="texto-historia">
            <h5>QUEM SAMOS</h5>
            <h3>CONHEÇA NOSSA HISTÓRIA</h3>
            <p>
              Fundada em 08 de maio de 1990, a Origem está atualmente localizada
              no bairro Campo Grande no município de Cariacica – ES, com uma
              filial no bairro Jardim Limoeiro no município de Serra – ES, a
              Origem está sempre melhorando a qualidade no atendimento ao
              cliente.
            </p>
            <p>
              Há 30 anos no mercado, a Origem mantém um estoque permanente de
              mais de 3.500 itens diferentes de produtos, tais como, Aço Inox,
              Aços Especiais, Alumínio, Bronze, Plásticos Industriais, Latão,
              Conexões, Abrasivos, Eletrodos, entre outros.
            </p>
            <div className="variedades">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  fill="currentColor"
                  className="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                </svg>

                <p>VARIAEDADE</p>
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="icone_variedade"
                />
                <p>QUALIDADE</p>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  fill="currentColor"
                  className="bi bi-stopwatch"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
                </svg>
                <p>PONTUALIDADE</p>
              </span>
            </div>
          </div>
          <div className="imagem-historia">
            <img src={Solda} alt="" />
          </div>
        </section>
      </main>
      <main className="main_produtos">
        <h2 className="title_produtos" data-aos="flip-up">nossos produtos</h2>
        <div className="produtos_grids">
          <Produto 
            imagem={latao}
            titulo="aço inox"
            tipos={["304", "316", "310", "420", "430"]}
            chapas={["Foscas", "escovadas", "polidas", "brilhantes"]}
            barras={["Redondas", "chatas", "quadradas", "sextavadas", "cantoneiras"]}
            tubos={["Polidos", "escovados", "decapados", "OD", "schedule"]}
            maisInfo={["Conexões", "Telas", "Eletrodos", "etc..."]}
          />
          <Produto 
            imagem={latao1}
            titulo="aço inox"
            tipos={["304", "316", "310", "420", "430"]}
            chapas={["Foscas", "escovadas", "polidas", "brilhantes"]}
            barras={["Redondas", "chatas", "quadradas", "sextavadas", "cantoneiras"]}
            tubos={["Polidos", "escovados", "decapados", "OD", "schedule"]}
            maisInfo={["Conexões", "Telas", "Eletrodos", "etc..."]}
          />
          <Produto 
            imagem={latao2}
            titulo="aço inox"
            tipos={["304", "316", "310", "420", "430"]}
            chapas={["Foscas", "escovadas", "polidas", "brilhantes"]}
            barras={["Redondas", "chatas", "quadradas", "sextavadas", "cantoneiras"]}
            tubos={["Polidos", "escovados", "decapados", "OD", "schedule"]}
            maisInfo={["Conexões", "Telas", "Eletrodos", "etc..."]}
          />
          <Produto 
            imagem={latao3}
            titulo="aço inox"
            tipos={["304", "316", "310", "420", "430"]}
            chapas={["Foscas", "escovadas", "polidas", "brilhantes"]}
            barras={["Redondas", "chatas", "quadradas", "sextavadas", "cantoneiras"]}
            tubos={["Polidos", "escovados", "decapados", "OD", "schedule"]}
            maisInfo={["Conexões", "Telas", "Eletrodos", "etc..."]}
          />
          <Produto 
            imagem={latao4}
            titulo="aço inox"
            tipos={["304", "316", "310", "420", "430"]}
            chapas={["Foscas", "escovadas", "polidas", "brilhantes"]}
            barras={["Redondas", "chatas", "quadradas", "sextavadas", "cantoneiras"]}
            tubos={["Polidos", "escovados", "decapados", "OD", "schedule"]}
            maisInfo={["Conexões", "Telas", "Eletrodos", "etc..."]}
          />
          <Produto 
            imagem={latao}
            titulo="aço inox"
            tipos={["304", "316", "310", "420", "430"]}
            chapas={["Foscas", "escovadas", "polidas", "brilhantes"]}
            barras={["Redondas", "chatas", "quadradas", "sextavadas", "cantoneiras"]}
            tubos={["Polidos", "escovados", "decapados", "OD", "schedule"]}
            maisInfo={["Conexões", "Telas", "Eletrodos", "etc..."]}
          />
        </div>
      </main>
      <Rodape />
    </div>
  );
};

export default Home;
