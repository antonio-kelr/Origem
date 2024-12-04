import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faDiceSix } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import latao from "../../../../img/mat-latao-pl6vgdao0ubk1slwsnzczcomufnopv7h8sogv2ipq0.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Produtos = () => {

  useEffect(() => {
    AOS.init(); // Inicializando o AOS
  }, []);

  return (
    <main className="main_produtos">
      <h2 className="title_produtos">nossos produtos</h2>
      <div className="produtos_grids">
        <div className="produtos" data-aos="fade-up">
          <div className="imagem-container">
            <img src={latao} alt="Descrição da imagem" />
          </div>
          <div className="detalhes_produtos">
            <h2>aço inox</h2>
            <div>
              <FontAwesomeIcon
                icon={faDotCircle}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tipos: <span>304 - 316 - 310 - 420 - 430</span>{" "}
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCube}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Chapas: <span> Foscas, escovadas, polidas e brilhantes</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDiceSix}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Barras:{" "}
                <span>
                  Redondas, chatas, quadradas, sextavadas e cantoneiras
                </span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tubos: <span>Polidos, escovados, decapados, OD e schedule</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Mais informações:{" "}
                <span>Conexões, Telas, Eletrodos, etc...</span>
              </span>
            </div>
            <div className="butao_orcamento">
              <button>
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "13px" }}
                />{" "}
                fazer orçamento
              </button>
            </div>
          </div>
        </div>
        <div className="produtos" data-aos="fade-down">
          <div className="imagem-container">
            <img src={latao} alt="Descrição da imagem" />
          </div>
          <div className="detalhes_produtos">
            <h2>aço inox</h2>
            <div>
              <FontAwesomeIcon
                icon={faDotCircle}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tipos: <span>304 - 316 - 310 - 420 - 430</span>{" "}
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCube}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Chapas: <span> Foscas, escovadas, polidas e brilhantes</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDiceSix}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Barras:{" "}
                <span>
                  Redondas, chatas, quadradas, sextavadas e cantoneiras
                </span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tubos: <span>Polidos, escovados, decapados, OD e schedule</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Mais informações:{" "}
                <span>Conexões, Telas, Eletrodos, etc...</span>
              </span>
            </div>
            <div className="butao_orcamento">
              <button>
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "13px" }}
                />{" "}
                fazer orçamento
              </button>
            </div>
          </div>
        </div>
        <div className="produtos" data-aos="fade-left">
          <div className="imagem-container">
            <img src={latao} alt="Descrição da imagem" />
          </div>
          <div className="detalhes_produtos">
            <h2>aço inox</h2>
            <div>
              <FontAwesomeIcon
                icon={faDotCircle}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tipos: <span>304 - 316 - 310 - 420 - 430</span>{" "}
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCube}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Chapas: <span> Foscas, escovadas, polidas e brilhantes</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDiceSix}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Barras:{" "}
                <span>
                  Redondas, chatas, quadradas, sextavadas e cantoneiras
                </span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tubos: <span>Polidos, escovados, decapados, OD e schedule</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Mais informações:{" "}
                <span>Conexões, Telas, Eletrodos, etc...</span>
              </span>
            </div>
            <div className="butao_orcamento">
              <button>
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "13px" }}
                />{" "}
                fazer orçamento
              </button>
            </div>
          </div>
        </div>
        <div className="produtos" data-aos="fade-right">
          <div className="imagem-container">
            <img src={latao} alt="Descrição da imagem" />
          </div>
          <div className="detalhes_produtos">
            <h2>aço inox</h2>
            <div>
              <FontAwesomeIcon
                icon={faDotCircle}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tipos: <span>304 - 316 - 310 - 420 - 430</span>{" "}
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCube}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Chapas: <span> Foscas, escovadas, polidas e brilhantes</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDiceSix}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Barras:{" "}
                <span>
                  Redondas, chatas, quadradas, sextavadas e cantoneiras
                </span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tubos: <span>Polidos, escovados, decapados, OD e schedule</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Mais informações:{" "}
                <span>Conexões, Telas, Eletrodos, etc...</span>
              </span>
            </div>
            <div className="butao_orcamento">
              <button>
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "13px" }}
                />{" "}
                fazer orçamento
              </button>
            </div>
          </div>
        </div>
        <div className="produtos" data-aos="fade-left">
          <div className="imagem-container">
            <img src={latao} alt="Descrição da imagem" />
          </div>
          <div className="detalhes_produtos">
            <h2>aço inox</h2>
            <div>
              <FontAwesomeIcon
                icon={faDotCircle}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tipos: <span>304 - 316 - 310 - 420 - 430</span>{" "}
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCube}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Chapas: <span> Foscas, escovadas, polidas e brilhantes</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDiceSix}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Barras:{" "}
                <span>
                  Redondas, chatas, quadradas, sextavadas e cantoneiras
                </span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tubos: <span>Polidos, escovados, decapados, OD e schedule</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Mais informações:{" "}
                <span>Conexões, Telas, Eletrodos, etc...</span>
              </span>
            </div>
            <div className="butao_orcamento">
              <button>
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "13px" }}
                />{" "}
                fazer orçamento
              </button>
            </div>
          </div>
        </div>
        <div className="produtos" data-aos="fade-right">
          <div className="imagem-container">
            <img src={latao} alt="Descrição da imagem" />
          </div>
          <div className="detalhes_produtos">
            <h2>aço inox</h2>
            <div>
              <FontAwesomeIcon
                icon={faDotCircle}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tipos: <span>304 - 316 - 310 - 420 - 430</span>{" "}
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCube}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Chapas: <span> Foscas, escovadas, polidas e brilhantes</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDiceSix}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Barras:{" "}
                <span>
                  Redondas, chatas, quadradas, sextavadas e cantoneiras
                </span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tubos: <span>Polidos, escovados, decapados, OD e schedule</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Mais informações:{" "}
                <span>Conexões, Telas, Eletrodos, etc...</span>
              </span>
            </div>
            <div className="butao_orcamento">
              <button>
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "13px" }}
                />{" "}
                fazer orçamento
              </button>
            </div>
          </div>
        </div>
        <div className="produtos" data-aos="fade-left">
          <div className="imagem-container">
            <img src={latao} alt="Descrição da imagem" />
          </div>
          <div className="detalhes_produtos">
            <h2>aço inox</h2>
            <div>
              <FontAwesomeIcon
                icon={faDotCircle}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tipos: <span>304 - 316 - 310 - 420 - 430</span>{" "}
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCube}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Chapas: <span> Foscas, escovadas, polidas e brilhantes</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDiceSix}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Barras:{" "}
                <span>
                  Redondas, chatas, quadradas, sextavadas e cantoneiras
                </span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tubos: <span>Polidos, escovados, decapados, OD e schedule</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Mais informações:{" "}
                <span>Conexões, Telas, Eletrodos, etc...</span>
              </span>
            </div>
            <div className="butao_orcamento">
              <button>
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "13px" }}
                />{" "}
                fazer orçamento
              </button>
            </div>
          </div>
        </div>
        <div className="produtos" data-aos="fade-right">
          <div className="imagem-container">
            <img src={latao} alt="Descrição da imagem" />
          </div>
          <div className="detalhes_produtos">
            <h2>aço inox</h2>
            <div>
              <FontAwesomeIcon
                icon={faDotCircle}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tipos: <span>304 - 316 - 310 - 420 - 430</span>{" "}
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCube}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Chapas: <span> Foscas, escovadas, polidas e brilhantes</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDiceSix}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Barras:{" "}
                <span>
                  Redondas, chatas, quadradas, sextavadas e cantoneiras
                </span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tubos: <span>Polidos, escovados, decapados, OD e schedule</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Mais informações:{" "}
                <span>Conexões, Telas, Eletrodos, etc...</span>
              </span>
            </div>
            <div className="butao_orcamento">
              <button>
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "13px" }}
                />{" "}
                fazer orçamento
              </button>
            </div>
          </div>
        </div>
        <div className="produtos" data-aos="fade-left">
          <div className="imagem-container">
            <img src={latao} alt="Descrição da imagem" />
          </div>
          <div className="detalhes_produtos">
            <h2>aço inox</h2>
            <div>
              <FontAwesomeIcon
                icon={faDotCircle}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tipos: <span>304 - 316 - 310 - 420 - 430</span>{" "}
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCube}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Chapas: <span> Foscas, escovadas, polidas e brilhantes</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDiceSix}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Barras:{" "}
                <span>
                  Redondas, chatas, quadradas, sextavadas e cantoneiras
                </span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Tubos: <span>Polidos, escovados, decapados, OD e schedule</span>
              </span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ fontSize: "13px", color: "#0B4863" }}
              />
              <span>
                Mais informações:{" "}
                <span>Conexões, Telas, Eletrodos, etc...</span>
              </span>
            </div>
            <div className="butao_orcamento">
              <button>
                {" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "13px" }}
                />{" "}
                fazer orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Produtos;
