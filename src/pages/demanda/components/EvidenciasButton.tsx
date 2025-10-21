import type { AtendenteDemanda } from "../../../models/AtendenteDemanda";
import FileSearchIcon from "../../../assets/icons/FileSearchIcon";
import "./css/EvidenciasButton.css";

interface Props {
  demanda: AtendenteDemanda;
}

const EvidenciasButton = ({ demanda }: Props) => {

  return (
    <>
      <button
        className="evidencias-button"
        disabled={demanda.evidencias[0] ? false : true}
        onClick={() => alert(demanda.evidencias[0].titulo)}
      >
        <span>Evidências</span> <FileSearchIcon />
      </button>
    </>
  );
};

export default EvidenciasButton;