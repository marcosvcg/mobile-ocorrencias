import type { AtendenteDemanda } from "../../../../../models/AtendenteDemanda";
import HistoricoTable from "./HistoricoTable";
import "./css/HistoricoModal.css";

interface Props {
  demanda: AtendenteDemanda;
  onClose: () => void;
}

const HistoricoModal = ({ onClose, demanda }: Props) => {
  return (
    <div className="historico-demanda-modal-container">
      <div className="historico-demanda-modal">
        <div className="historico-demanda-modal-header">
          <span className="historico-demanda-titulo">Histórico da Demanda</span>
          <p className="historico-demanda-close" onClick={() => onClose()}>&times;</p>
        </div>
        <div className="historico-demanda-modal-content">
          <HistoricoTable demanda={demanda} />
        </div>
      </div>
    </div>
  );
};

export default HistoricoModal;
