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
        <div className="texto-historia texto-historia_quem_samos" data-aos="slide-up" >
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
            Fundada em 08 de maio de 1990, a Origem está atualmente localizada
            no bairro Campo Grande no município de Cariacica – ES, com uma
            filial no bairro Jardim Limoeiro no município de Serra – ES, a
            Origem está sempre melhorando a qualidade no atendimento ao cliente.
          </p>
          <p>
            Há 30 anos no mercado, a Origem mantém um estoque permanente de mais
            de 3.500 itens diferentes de produtos, tais como, Aço Inox, Aços
            Especiais, Alumínio, Bronze, Plásticos Industriais, Latão, Conexões,
            Abrasivos, Eletrodos, entre outros.
          </p>
        </div>

        <div className="imagem-historia"  data-aos="slide-right">
          <img src={ProAluminio} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Quemsamos;
