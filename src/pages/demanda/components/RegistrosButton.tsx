import type { AtendenteDemanda } from "../../../models/AtendenteDemanda";
import CameraIcon from "../../../assets/icons/CameraIcon";
import "./css/RegistrosButton.css";

interface Props {
  demanda: AtendenteDemanda;
}

const RegistrosButton = ({ demanda }: Props) => {

  return (
    <>
      <button
        className="registros-button"
        disabled={demanda.registros[0] ? false : true}
        onClick={() => alert(demanda.registros?.[0].titulo)}
      >
        <span>Registros</span> <CameraIcon />
      </button>
    </>
  );
};

export default RegistrosButton;
