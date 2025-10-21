import type { AtendenteDemanda } from "../../../models/AtendenteDemanda";
import ClockIcon from "../../../assets/icons/ClockIcon";
import "./css/HistoricoButton.css";

interface Props {
  demanda: AtendenteDemanda;
}

const HistoricoButton = ({ demanda }: Props) => {

  return (
    <>
      <button
        className="historico-button"
        disabled={!demanda.historico}
        onClick={() => demanda.historico.forEach(historico => {
          console.log(historico);
        })}
      >
        <span>Histórico</span> <ClockIcon />
      </button>
    </>
  );
};

export default HistoricoButton;
