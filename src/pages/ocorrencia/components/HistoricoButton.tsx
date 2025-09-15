import type { Ocorrencia } from "../../../models/Ocorrencia";
import ClockIcon from "./icons/ClockIcon";
import "./css/HistoricoButton.css";
import HistoricoModal from "./modals/Historico/HistoricoModal";
import { useState } from "react";

interface Props {
  ocorrencia: Ocorrencia;
}

const HistoricoButton = ({ ocorrencia }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="historico-button"
        disabled={!ocorrencia.historico}
        onClick={() => setModalOpen(true)}
      >
        <span>Histórico</span> <ClockIcon />
      </button>

      {modalOpen && <HistoricoModal onClose={() => setModalOpen(false)} ocorrencia={ocorrencia} />}
    </>
  );
};

export default HistoricoButton;
