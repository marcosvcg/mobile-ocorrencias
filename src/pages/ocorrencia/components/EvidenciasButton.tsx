import type { Ocorrencia } from "../../../models/Ocorrencia";
import FileSearchIcon from "./icons/FileSearchIcon";
import "./css/EvidenciasButton.css";
import { useState } from "react";
import EvidenciasModal from "./modals/Evidencias/EvidenciasModal";

interface Props {
  ocorrencia: Ocorrencia;
}

const EvidenciasButton = ({ ocorrencia }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="evidencias-button"
        disabled={ocorrencia.arquivos_recebidos.length === 0}
        onClick={() => setModalOpen(true)}
      >
        <span>Evidências</span> <FileSearchIcon />
      </button>

      {modalOpen && (<EvidenciasModal onClose={() => setModalOpen(false)} ocorrencia={ocorrencia} />)}
    </>
  );
};

export default EvidenciasButton;