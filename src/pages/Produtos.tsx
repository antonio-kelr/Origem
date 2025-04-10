import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import latao from "../../../../img/mat-latao-pl6vgdao0ubk1slwsnzczcomufnopv7h8sogv2ipq0.jpg";
import latao1 from "../../../../img/pngegg-pl6p4ffmp6aclzpdt4ybbvekwn5c48arwlfl9ghmm0.png";
import latao2 from "../..//../../img/pngwing.com-1-pl6u98haej9v9z9go0rok8j5hw9bhvywnayc1yh394.png";
import latao3 from "../..//../../img/fornecedor-de-tubo-de-bronze_10109_324454_1586883390307_cover-removebg-preview-pl6ymwwmv14gv484xofoby3svt2xq0xxbqnl7yolh4.png";
import latao4 from "../..//../../img/chapa-de-celeron-industrial-01-1-pl6zdguhxjh2ujnkvnn99qvl0o7867cxz64eadb7p4.png";

import Produto from "../components/produto/produto";

const Produtos = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="main_produtos">
      <h2 className="title_produtos">nossos produtos</h2>
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
  );
};

export default Produtos;
