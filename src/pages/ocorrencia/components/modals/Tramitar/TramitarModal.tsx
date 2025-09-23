import "./css/TramitarModal.css";

interface Props {
    etapa: string;
    status: string;
    onCancelar: () => void;
    onSalvar: () => void;
}

const TramitarModal = ({ etapa, status, onCancelar, onSalvar }: Props) => {
  return (
    <div className="tramitar-modal-container">
      <div className="tramitar-modal">
        <div className="tramitar-modal-header">
          <span className="tramitar-titulo">Tramitação</span>
        </div>
        <div className="tramitar-modal-content">
            <div className="tramitar-etapa-div">
                <span className="tramitar-texto">Etapa:</span>
                <p className="tramitar-etapa-texto">{etapa}</p>
            </div>
            <div className="tramitar-status-div">
              <span className="tramitar-texto">Status:</span>
                    <p className="tramitar-status-texto">{status}</p>
                </div>
            </div>
            <div className="tramitar-buttons-container">
              <button className="tramitar-button-cancelar" onClick={() => onCancelar()}>Cancelar</button>
              <button className="tramitar-button-salvar" onClick={() => onSalvar()}>Salvar</button>
            </div>
        </div>
    </div>
  );
};

export default TramitarModal;
