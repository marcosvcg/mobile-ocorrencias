import type { AtendenteDemanda } from "../../../../../models/AtendenteDemanda";
import HistoricoTable from "./HistoricoTable";
import "./css/HistoricoModal.css";

interface Props {
  demanda: AtendenteDemanda;
  onClose: () => void;
}

const HistoricoModal = ({ onClose, demanda }: Props) => {
  return (
    <div className="historico-modal-container">
      <div className="historico-modal">
        <div className="historico-modal-header">
          <span className="historico-titulo">Histórico da Demanda</span>
          <p className="historico-close" onClick={() => onClose()}>&times;</p>
        </div>
        <div className="historico-modal-content">
          <HistoricoTable demanda={demanda} />
        </div>
      </div>
    </div>
  );
};

export default HistoricoModal;
