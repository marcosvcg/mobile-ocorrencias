import FileUploader from "../../../../../util/FileUploader";
import "../../../../../util/Swiper.css";
import "./css/EnviarFotosModal.css";

interface Props {
  onClose: () => void;
  identificadorSolicitacao: string;
  assunto: string;
  descricao: string;
  solicitacao: number;
}

const EnviarFotosModal = ({
  onClose, identificadorSolicitacao, assunto, descricao, solicitacao }: Props) => {

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
            <FileUploader
              identificadorSolicitacao={identificadorSolicitacao}
              assunto={assunto}
              descricao={descricao}
              solicitacao={solicitacao} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnviarFotosModal;
