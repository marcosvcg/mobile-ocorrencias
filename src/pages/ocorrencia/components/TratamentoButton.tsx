import type { Ocorrencia } from "../../../models/Ocorrencia";
import "./css/TratamentoButton.css";

interface Props {
    ocorrencia: Ocorrencia;
}

const TratamentoButton = ({ ocorrencia }: Props) => {

  const handleClick = () => {
    alert('tratamento');
  }

  return <button className="tratamento-button" disabled={ocorrencia.status === "Concluído"} onClick={handleClick}>
          <span>Tratamento</span>
         </button>
}

export default TratamentoButton;