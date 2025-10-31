import type { AtendenteDemanda } from "../../../models/AtendenteDemanda";
import { useState } from "react";
import CameraIcon from "../../../assets/icons/CameraIcon";
import RegistrosModal from "./modals/Registros/RegistrosModal";
import EnviarFotosModal from "./modals/Registros/EnviarFotosModal";
import "./css/RegistrosButton.css";

interface Props {
  demanda: AtendenteDemanda;
}

const RegistrosButton = ({ demanda }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [enviarFotosModalOpen, setEnviarFotosModalOpen] = useState(false);

  return (
    <>
      <button
        className="registros-button"
        onClick={() => setModalOpen(true)}
      >
        <span>Registros</span> <CameraIcon />
      </button>

      {modalOpen && (
        <RegistrosModal
        demanda={demanda}
        onClose={() => setModalOpen(false)}
        onEnviarFotos={() => {
          setModalOpen(false)
          setEnviarFotosModalOpen(true)
        }}/>
      )}

      {enviarFotosModalOpen && (
        <EnviarFotosModal 
        onClose={() => {setEnviarFotosModalOpen(false)}}
        demanda={demanda.id}
        />
      )}
    </>
  );
};

export default RegistrosButton;
