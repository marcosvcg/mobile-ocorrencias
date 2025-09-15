import type { Ocorrencia } from "../../../../../models/Ocorrencia";
import HistoricoTable from "./HistoricoTable";
import "./css/HistoricoModal.css";

interface Props {
  ocorrencia: Ocorrencia;
  onClose: () => void;
}

const HistoricoModal = ({ onClose, ocorrencia }: Props) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <span className="titulo">Histórico da Ocorrência</span>
          <p className="close" onClick={() => onClose()}>&times;</p>
        </div>
        <div className="modal-content">
          <HistoricoTable ocorrencia={ocorrencia} />
        </div>
      </div>
    </div>
  );
};

export default HistoricoModal;
