import type { AtendenteDemanda } from "../../../models/AtendenteDemanda";
import { useState } from "react";
import ClockIcon from "../../../assets/icons/ClockIcon";
import HistoricoModal from "./modals/Historico/HistoricoModal";
import "./css/HistoricoButton.css";

interface Props {
  demanda: AtendenteDemanda;
}

const HistoricoButton = ({ demanda }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="historico-button"
        disabled={!demanda.historico}
        onClick={() => setModalOpen(true)}
      >
        <span>Histórico</span> <ClockIcon />
      </button>

      {modalOpen && <HistoricoModal onClose={() => setModalOpen(false)} demanda={demanda} />}
    </>
  );
};

export default HistoricoButton;
