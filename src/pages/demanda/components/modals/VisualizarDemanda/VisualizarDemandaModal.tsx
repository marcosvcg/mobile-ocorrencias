import type { AtendenteDemanda } from "../../../../../models/AtendenteDemanda";
import DOMPurify from "dompurify";
import "./css/VisualizarDemandaModal.css";

interface Props {
  demanda: AtendenteDemanda;
  onClose: () => void;
}

const VisualizarDemandaModal = ({ onClose, demanda }: Props) => {
  const endereco = `${demanda.endereco.logradouro}, ${demanda.endereco.bairro}, ${demanda.endereco.numero} - ${demanda.endereco.cidade} - ${demanda.endereco.estado} - CEP: ${demanda.endereco.cep}`;
  const conteudoPurificado = DOMPurify.sanitize(demanda.conteudo);
  const conteudoDecodificado = decodificarHtml(conteudoPurificado);

  function decodificarHtml(html: string) {
    const texto = document.createElement("textarea");
    texto.innerHTML = html;
    return texto.value;
  }

  return (
    <div className="visualizar-demanda-modal-container">
      <div className="visualizar-demanda-modal">
        <div className="visualizar-demanda-modal-header">
          <span className="visualizar-demanda-titulo">Detalhes da Demanda</span>
          <p className="visualizar-demanda-close" onClick={() => onClose()}>&times;</p>
        </div>
        <div className="visualizar-demanda-modal-content">
            <div className="conteudo-demanda" dangerouslySetInnerHTML={{ __html: conteudoDecodificado }} ></div>
            <br /><hr /><br />
            <div className="endereco-demanda">
                <strong>Endereço: </strong>
                <a href={`https://www.google.com/maps/search/?api=1&query=${endereco}`} target="_blank" rel="noopener noreferrer">{endereco}</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizarDemandaModal;
