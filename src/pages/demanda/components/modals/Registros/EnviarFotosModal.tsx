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
      <div className="enviar-fotos-demanda-modal-container">
        <div className="enviar-fotos-demanda-modal">
          <div className="enviar-fotos-demanda-modal-header">
            <span className="enviar-fotos-demanda-titulo">Enviar Fotos</span>
            <p className="enviar-fotos-demanda-close" onClick={() => onClose()}>
              &times;
            </p>
          </div>

          <div className="enviar-fotos-demanda-modal-content">
            <FileUploaderDemanda
              demanda={demanda} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnviarFotosModal;
