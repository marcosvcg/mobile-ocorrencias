import type { AtendenteDemanda } from "../../../../../models/AtendenteDemanda";
import ComentarioInternoTextArea from "./ComentarioInternoTextArea";
import DescricaoTextArea from "./DescricaoTextarea";
import StatusDropdown from "./StatusDropdown";
import "./css/ExecutarModal.css";

interface Props {
  demanda: AtendenteDemanda;
  onClose: () => void;
  onSalvar: () => void;
}

const ExecutarModal = ({ demanda, onClose, onSalvar }: Props) => {

  return (
    <div className="executar-modal-container">
      <div className="executar-modal">
        <div className="executar-modal-header">
          <span className="executar-titulo">Executar Demanda</span>
          <p className="executar-close" onClick={() => onClose()}>&times;</p>
        </div>
        <div className="executar-modal-content">
          <div className="executar-modal-content-inputs">
            <StatusDropdown />
            <DescricaoTextArea />
            <ComentarioInternoTextArea />
          </div>
            <div className="executar-modal-button-container">
              <button className="executar-modal-button-salvar" onClick={() => onSalvar()}>Salvar</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutarModal;
