import ProAluminio from "../../../../img/Steel-Download-Free-PNG.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Quemsamos = () => {
  useEffect(() => {
    AOS.init(); // Inicializando o AOS
  }, []);

  return (
    <main className="conteudo-principal conteudo_quem_samos">
      <section>
        <div
          className="texto-historia texto-historia_quem_samos"
          data-aos="slide-up"
        >
          <h5>A Empresa</h5>
          <h3>CONHEÇA NOSSA HISTÓRIA</h3>
          <p>
            A Origem Comércio de Metais e Equipamentos Ltda, preparada para
            atender todo o mercado capixaba, atua na comercialização de uma
            grande variedade de produtos industriais, metalúrgicos,
            siderúrgicos, hidráulicos, alimentícios, moveleiros, navais, entre
            outros.
          </p>
          <p>
            Fundada em 12 de março de 1991, a Origem está atualmente localizada
            no bairro Vila Nova, no município de Vila Velha – ES, e conta com
            uma unidade em funcionamento no bairro Civit II, em Serra – ES. A
            empresa segue investindo constantemente na excelência do atendimento
            e na satisfação dos seus clientes{" "}
          </p>
          <p>
            Com mais de 30 anos de experiência no mercado, a NovaMetais oferece
            um amplo portfólio com mais de 3.500 itens em estoque, incluindo Aço
            Inox, Aços Especiais, Alumínio, Bronze, Plásticos Técnicos, Latão,
            Conexões, Abrasivos, Eletrodos, entre outros produtos voltados à
            indústria e ao comércio{" "}
          </p>
        </div>

        <div className="imagem-historia" data-aos="slide-right">
          <img src={ProAluminio} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Quemsamos;
