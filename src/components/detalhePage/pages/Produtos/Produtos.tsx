import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import latao from "../../../../img/mat-latao-pl6vgdao0ubk1slwsnzczcomufnopv7h8sogv2ipq0.jpg";
import Produto from "../../../produto/produto";

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
          imagem={latao}
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
          imagem={latao}
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
