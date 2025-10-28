import type { AtendenteDemanda } from "../../../models/AtendenteDemanda";
import { useState } from "react";
import ScrollTextIcon from "../../../assets/icons/ScrollTextIcon";
import VisualizarDemandaModal from "./modals/VisualizarDemanda/VisualizarDemandaModal";
import "./css/VisualizarDemandaButton.css";

interface Props {
  demanda: AtendenteDemanda;
}

const VisualizarDemandaButton = ({ demanda }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="visualizar-demanda-button"
        onClick={() => setModalOpen(true)}
      >
        <span>Visualizar{"\n"}Demanda</span> <ScrollTextIcon />
      </button>

      {modalOpen && (<VisualizarDemandaModal onClose={() => setModalOpen(false)} demanda={demanda} /> )}
    </>
  );
};

export default VisualizarDemandaButton;