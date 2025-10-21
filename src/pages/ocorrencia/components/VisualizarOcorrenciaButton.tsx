import type { Ocorrencia } from "../../../models/Ocorrencia";
import { useState } from "react";
import ScrollTextIcon from "../../../assets/icons/ScrollTextIcon";
import VisualizarOcorrenciaModal from "./modals/VisualizarOcorrencia/VisualizarOcorrenciaModal";
import "./css/VisualizarOcorrenciaButton.css";

interface Props {
  ocorrencia: Ocorrencia;
}

const VisualizarOcorrenciaButton = ({ ocorrencia }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="visualizar-ocorrencia-button"
        disabled={ocorrencia.documentos_solicitacao.length === 0}
        onClick={() => setModalOpen(true)}
      >
        <span>Visualizar{"\n"}Ocorrência</span> <ScrollTextIcon />
      </button>

      {modalOpen && (<VisualizarOcorrenciaModal onClose={() => setModalOpen(false)} ocorrencia={ocorrencia} /> )}
    </>
  );
};

export default VisualizarOcorrenciaButton;
