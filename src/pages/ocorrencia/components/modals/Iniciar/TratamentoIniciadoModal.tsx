import "./css/TratamentoIniciadoModal.css";

interface Props {
    onClose: () => void;
}

const TratamentoIniciadoModal = ({ onClose }: Props) => {
  return (
    <div className="tratamento-iniciado-modal-container">
      <div className="tratamento-iniciado-modal">
        <div className="tratamento-iniciado-modal-header">
          <p className="tratamento-iniciado-close" onClick={() => onClose()}>&times;</p>
        </div>
        <div className="tratamento-iniciado-modal-content">
            <span className="tratamento-iniciado-texto">Tratamento Iniciado!</span>
            </div>
        </div>
    </div>
  );
};

export default TratamentoIniciadoModal;
