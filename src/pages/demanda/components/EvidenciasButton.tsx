import type { AtendenteDemanda } from "../../../models/AtendenteDemanda";
import { useState } from "react";
import FileSearchIcon from "../../../assets/icons/FileSearchIcon";
import EvidenciasModal from "./modals/Evidencias/EvidenciasModal";
import "./css/EvidenciasButton.css";

interface Props {
  demanda: AtendenteDemanda;
}

const EvidenciasButton = ({ demanda }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="evidencias-button"
        disabled={demanda.evidencias[0] ? false : true}
        onClick={() => setModalOpen(true)}
      >
        <span>Evidências</span> <FileSearchIcon />
      </button>

      {modalOpen && <EvidenciasModal onClose={() => setModalOpen(false)} demanda={demanda} />}
    </>
  );
};

export default EvidenciasButton;