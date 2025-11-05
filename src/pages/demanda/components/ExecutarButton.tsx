import type { AtendenteDemanda } from "../../../models/AtendenteDemanda";
import { useState } from "react";
import ExecutarModal from "./modals/Executar/ExecutarModal";
import "./css/ExecutarButton.css";

interface Props {
  demanda: AtendenteDemanda;
}

const ExecutarButton = ({ demanda }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const status = demanda.historico.at(-1)?.status;

  return (
    <>
      <button className="executar-button"
        disabled={ status === "Concluído" || status === "Arquivado" }
        onClick={() => setModalOpen(true)}
      >
        <span>Executar</span>
      </button>

      {modalOpen && <ExecutarModal onClose={() => setModalOpen(false)} onSalvar={() => setModalOpen(false)} demanda={demanda} />}
    </>
  );
};

export default ExecutarButton;
