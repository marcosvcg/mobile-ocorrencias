import "./css/HistoricoModal.css";
import HistoricoTable from "./HistoricoTable";

interface Props {
    onClose: () => void;
}

const HistoricoModal = ({ onClose }: Props) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <span className="titulo">Histórico da Ocorrência</span>
          <p className="close" onClick={() => onClose()}>&times;</p>
        </div>
        <div className="modal-content">
          <HistoricoTable />
        </div>
      </div>
    </div>
  );
};

export default HistoricoModal;
