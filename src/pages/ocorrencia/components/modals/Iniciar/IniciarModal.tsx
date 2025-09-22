import "./css/IniciarModal.css";

interface Props {
  onNao: () => void;
  onSim: () => void;
}

const IniciarModal = ({ onNao, onSim }: Props) => {
  return (
    <div className="iniciar-modal-container">
      <div className="iniciar-modal">
        <div className="iniciar-modal-content">
            <span className="deseja-iniciar-tratamento">Deseja iniciar o tratamento da ocorrência?</span>
                <div className="iniciar-buttons-container">
                    <button className="iniciar-button-nao" onClick={onNao}>Não</button>
                    <button className="iniciar-button-sim" onClick={onSim}>Sim</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default IniciarModal;
