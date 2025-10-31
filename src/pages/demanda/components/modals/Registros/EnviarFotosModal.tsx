import FileUploaderDemanda from "../../../../../util/FileUploaderDemanda";
import "../../../../../util/Swiper.css";
import "./css/EnviarFotosModal.css";

interface Props {
  onClose: () => void;
  demanda: number;
}

const EnviarFotosModal = ({ onClose, demanda }: Props) => {

  return (
    <>
      <div className="enviar-fotos-modal-container">
        <div className="enviar-fotos-modal">
          <div className="enviar-fotos-modal-header">
            <span className="enviar-fotos-titulo">Enviar Fotos</span>
            <p className="enviar-fotos-close" onClick={() => onClose()}>
              &times;
            </p>
          </div>

          <div className="enviar-fotos-modal-content">
            <FileUploaderDemanda
              demanda={demanda} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnviarFotosModal;
