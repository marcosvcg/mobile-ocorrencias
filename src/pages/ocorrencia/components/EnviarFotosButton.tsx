import type { Ocorrencia } from "../../../models/Ocorrencia";
import CameraIcon from "./icons/CameraIcon";
import "./css/EnviarFotosButton.css";

interface Props {
  ocorrencia: Ocorrencia;
}

const EnviarFotosButton = ({ ocorrencia }: Props) => {
  const handleClick = () => {
    alert("enviar fotos");
  };

  return (
    <button
      className="enviar-fotos-button"
      disabled={
        ocorrencia.atendente === null &&
        !ocorrencia.documentos_solicitacao[0]?.verificado_em
      }
      onClick={handleClick}
    >
      <span>Enviar Fotos</span> <CameraIcon />
    </button>
  );
};

export default EnviarFotosButton;
