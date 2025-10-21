import type { Ocorrencia } from "../../../models/Ocorrencia";
import { useState } from "react";
import ClockIcon from "../../../assets/icons/ClockIcon";
import HistoricoModal from "./modals/Historico/HistoricoModal";
import "./css/HistoricoButton.css";

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
