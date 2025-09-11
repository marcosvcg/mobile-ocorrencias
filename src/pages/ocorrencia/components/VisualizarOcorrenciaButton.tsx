import type { Ocorrencia } from "../../../models/Ocorrencia";
import ScrollTextIcon from "./icons/ScrollTextIcon";
import "./css/VisualizarOcorrenciaButton.css";

interface Props {
    ocorrencia: Ocorrencia;
}

const VisualizarOcorrenciaButton = ({ ocorrencia }: Props) => {

  const handleClick = () => {
    alert('visualizar OS');
  }

  return <button className="visualizar-ocorrencia-button" disabled={ocorrencia.arquivos_recebidos.length === 0} onClick={handleClick}>
            <span>Visualizar{'\n'}Ocorrência</span> <ScrollTextIcon />
         </button>
}

export default VisualizarOcorrenciaButton;