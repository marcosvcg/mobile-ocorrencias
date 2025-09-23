import type { Ocorrencia } from "../../../models/Ocorrencia";
import { useState } from "react";
import CameraIcon from "./icons/CameraIcon";
import RegistrosModal from "./modals/Registros/RegistrosModal";
import "./css/RegistrosButton.css";

interface Props {
  ocorrencia: Ocorrencia;
}

const RegistrosButton = ({ ocorrencia }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="registros-button"
        disabled={
          ocorrencia.atendente === null &&
          !ocorrencia.documentos_solicitacao[0]?.verificado_em
        }
        onClick={() => setModalOpen(true)}
      >
        <span>Registros</span> <CameraIcon />
      </button>

      {modalOpen && (
        <RegistrosModal
          onClose={() => setModalOpen(false)}
          ocorrencia={ocorrencia}
        />
      )}
    </>
  );
};

export default RegistrosButton;
