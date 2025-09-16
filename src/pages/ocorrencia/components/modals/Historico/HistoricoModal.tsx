import type { Ocorrencia } from "../../../../../models/Ocorrencia";
import HistoricoTable from "./HistoricoTable";
import "./css/HistoricoModal.css";

interface Props {
  ocorrencia: Ocorrencia;
  onClose: () => void;
}

const HistoricoModal = ({ onClose, ocorrencia }: Props) => {
  return (
    <div className="historico-modal-container">
      <div className="historico-modal">
        <div className="historico-modal-header">
          <span className="historico-titulo">Histórico da Ocorrência</span>
          <p className="historico-close" onClick={() => onClose()}>&times;</p>
        </div>
        <div className="historico-modal-content">
          <HistoricoTable ocorrencia={ocorrencia} />
        </div>
      </div>
    </div>
  );
};

export default HistoricoModal;
