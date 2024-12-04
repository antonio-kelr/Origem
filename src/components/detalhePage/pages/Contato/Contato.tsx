import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputMask } from "primereact/inputmask";
import AOS from "aos";
import "aos/dist/aos.css";




import { Button } from "primereact/button";

import "./Contato.css";
import { useEffect } from "react";

const Contato = () => {
  useEffect(() => {
    AOS.init(); // Inicializando o AOS
  }, []);

  return (
    <div className="hero_contato">
      <form className="form_contatoS" data-aos="flip-right">
      <div className="titles">
        <h3>fale conosco</h3>
        <span className="title_segudario">em que posso ajudar?</span>
      </div>
        <div className="p-field">
          <label htmlFor="nome">
            Nome:<span>*</span>
          </label>
          <InputText
            id="nome"
            //   value={novaAgenda.nome}
            //   onChange={(e) =>
            //     setNovaAgenda({ ...novaAgenda, nome: e.target.value })
            //   }
          />
        </div>

        <div className="p-field">
          <label htmlFor="email">
            Email:<span>*</span>
          </label>
          <InputText
            id="email"
            //   value={NewCLassificados.email}
            //   onChange={(e) =>
            //     setNewClassificados({
            //       ...NewCLassificados,
            //       email: e.target.value,
            //     })
            //   }
            keyfilter="email"
          />
        </div>

        <div className="p-field">
          <label htmlFor="telefone" className="block mb-2">
            Telefone:<span>*</span>
          </label>
          <InputMask
            id="telefone"
            mask="(99) 999999999"
            //   value={NewCLassificados.telefone || ""}
            //   onChange={(e) =>
            //     setNewClassificados({
            //       ...NewCLassificados,
            //       telefone: e.target.value || "",
            //     })
            //   }
          />
        </div>
        <div className="p-field">
          <label htmlFor="descricao">
            Mensagem:
            <span>*</span>
          </label>
          <InputTextarea
            id="descricao"
            // value={NewCLassificados.descricao}
            // onChange={(e) =>
            //   setNewClassificados({
            //     ...NewCLassificados,
            //     descricao: e.target.value,
            //   })
            // }
            rows={5}
            cols={30}
            style={{ width: "100%" }}
          />
        </div>
        <Button label="Enviar" className="buto_contato" severity="danger" raised />
      </form>
    </div>
  );
};

export default Contato;
