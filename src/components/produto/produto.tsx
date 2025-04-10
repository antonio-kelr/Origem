import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faCube, faDiceSix, faDatabase, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

interface ProdutoProps {
  imagem: string;
  titulo: string;
  tipos: string[];
  chapas: string[];
  barras: string[];
  tubos: string[];
  maisInfo: string[];
}

const Produto = ({ imagem, titulo, tipos, chapas, barras, tubos, maisInfo }: ProdutoProps) => {
  return (
    <div className="produtos" data-aos="fade-up">
      <div className="imagem-container">
        <img src={imagem} alt={titulo} />
      </div>
      <div className="detalhes_produtos">
        <h2>{titulo}</h2>
        <div>
          <FontAwesomeIcon
            icon={faDotCircle}
            style={{ fontSize: "13px", color: "#0B4863" }}
          />
          <span>
            Tipos: <span>{tipos.join(" - ")}</span>
          </span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCube}
            style={{ fontSize: "13px", color: "#0B4863" }}
          />
          <span>
            Chapas: <span>{chapas.join(", ")}</span>
          </span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faDiceSix}
            style={{ fontSize: "13px", color: "#0B4863" }}
          />
          <span>
            Barras: <span>{barras.join(", ")}</span>
          </span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faDatabase}
            style={{ fontSize: "13px", color: "#0B4863" }}
          />
          <span>
            Tubos: <span>{tubos.join(", ")}</span>
          </span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCommentDots}
            style={{ fontSize: "13px", color: "#0B4863" }}
          />
          <span>
            Mais informações: <span>{maisInfo.join(", ")}</span>
          </span>
        </div>
        <div className="butao_orcamento">
          <button>
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ fontSize: "13px" }}
            />{" "}
            fazer orçamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produto; 