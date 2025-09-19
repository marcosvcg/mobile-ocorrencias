import "./css/TratamentoModal.css";

interface Props {
  onNao: () => void;
  onSim: () => void;
}

const TratamentoModal = ({ onNao, onSim }: Props) => {
  return (
    <div className="tratamento-modal-container">
      <div className="tratamento-modal">
        <div className="tratamento-modal-content">
            <span className="deseja-iniciar-tratamento">Deseja iniciar o tratamento da ocorrência?</span>
                <div className="tratamento-buttons-container">
                    <button className="tratamento-button-nao" onClick={onNao}>Não</button>
                    <button className="tratamento-button-sim" onClick={onSim}>Sim</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TratamentoModal;
