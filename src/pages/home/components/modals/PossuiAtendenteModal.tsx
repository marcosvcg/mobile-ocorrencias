import type { SolicitacaoView } from "../../../../models/SolicitacaoView";
import "./css/PossuiAtendenteModal.css";

interface Props {
  atendente: SolicitacaoView["atendente"];
  onNao: () => void;
  onSim: () => void;
}

const PossuiAtendenteModal = ({ onNao, onSim, atendente }: Props) => {
  return (
    <div className="possui-atendente-modal-container">
      <div className="possui-atendente-modal">
        <div className="possui-atendente-modal-content">
          <span className="exibir-atendente">A solicitação está sendo tratada pelo atendente "{atendente.first_name}"</span>
          <div className="possui-atendente-modal-rodape"></div>
            <span className="deseja-continuar">Deseja continuar?</span>
                <div className="buttons-container">
                    <button className="button-nao" onClick={onNao}>Não</button>
                    <button className="button-sim" onClick={onSim}>Sim</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PossuiAtendenteModal;
