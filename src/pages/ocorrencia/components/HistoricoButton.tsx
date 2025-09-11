import type { Ocorrencia } from "../../../models/Ocorrencia";
import ClockIcon from "./icons/ClockIcon";
import "./css/HistoricoButton.css";

interface Props {
    ocorrencia: Ocorrencia;
}

const HistoricoButton = ({ ocorrencia }: Props) => {

  const handleClick = () => {
    alert('histórico');
  }

  return <button className="historico-button" disabled={!ocorrencia.historico} onClick={handleClick}>
            <span>Histórico</span> <ClockIcon />
         </button>
}

export default HistoricoButton;