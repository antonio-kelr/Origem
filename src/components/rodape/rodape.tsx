import logorodape from "../../img/logo-rodape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

import "./rodape.css";
import { FaPhoneAlt } from "react-icons/fa";
const rodape = () => {
  return (
    <>
      <footer>
        <div className="grid_rodape">
          <div className="rodape logo_rodape">
            <div>
              <img src={logorodape} alt="" />
            </div>
            <span>
              Somos especialistas em nosso segmento, e queremos oferecer
              produtos de qualidade e preços acessíveis aos nossos clientes.
            </span>
            <span>
              <i>
                <FontAwesomeIcon icon={faFacebook} />
              </i>
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </span>
          </div>
          <div className="rodape unidade_cariacia">
            <h3>UNIDADE CARIACICA</h3>
            <div>
              <FaPhoneAlt style={{ fontSize: "17px" }} />
              <p>(27) 3228-0015</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "17px" }} />
              <p>(27) 3228-0015</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "17px" }} />
              <p>(27) 3228-0015</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "17px" }} />
              <p>antonio@filho</p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faLocationPin}
                style={{ fontSize: "17px" }}
              />
              <a
                className="indereco"
                href="https://maps.app.goo.gl/f4FwcFwSo6wL1JT89"
                target="_blank"
              >
                vila davi rua da paz N:48
              </a>
            </div>
          </div>
          <div className="rodape unidade_serra">
            <h3>UNIDADE Serra</h3>
            <div>
              <FaPhoneAlt />
              <p>(27) 3228-0015</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>antonio@filho</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationPin} />
              <a
                className="indereco"
                href="https://maps.app.goo.gl/f4FwcFwSo6wL1JT89"
                target="_blank"
              >
                vila davi rua da paz N:48
              </a>
            </div>
          </div>
          <div className="rodape form">
            <h3>receba novidades em seu email</h3>
            <form>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="Email" />
              <input type="button" value="cadastrar" />
            </form>
          </div>
        </div>
        <div className="Copyright">
          <div>
            © Copyright 2022 │ Origem - Aços e Metais Sob Medida │ Todos os
            direitos reservados.
            <div className="smart">
              <span>Desenvolvido por @Antonio filho</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default rodape;
