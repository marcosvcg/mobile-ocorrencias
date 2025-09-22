interface Props {
    etapa: string;
    status: string;
    onClose: () => void;
}

const TramitarModal = ({ etapa, status, onClose }: Props) => {
  return (
    <div className="tramitar-modal-container">
      <div className="tramitar-modal">
        <div className="tramitar-modal-header">
          <p className="tramitar-close" onClick={() => onClose()}>&times;</p>
        </div>
        <div className="tramitar-modal-content">
            <div className="tramitar-etapa-div">
                <span className="tramitar-texto">Etapa / Órgão</span>
                <button className="tramitar-button-etapa">{etapa}</button>
            </div>
            <div className="tramitar-status-div">
                    <button className="tramitar-button-status">{status}</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TramitarModal;
