import type { Ocorrencia } from "../../../models/Ocorrencia";
import FileSearchIcon from "./icons/FileSearchIcon";
import "./css/EvidenciasButton.css";

interface Props {
    ocorrencia: Ocorrencia;
}

const EvidenciasButton = ({ ocorrencia }: Props) => {

  const handleClick = () => {
    alert('evidências');
  }

  return <button className="evidencias-button" disabled={ocorrencia.arquivos_recebidos.length === 0} onClick={handleClick}>
            <span>Evidências</span> <FileSearchIcon />
         </button>
}

export default EvidenciasButton;