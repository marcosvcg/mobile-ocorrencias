import { useState } from "react";
import type { AtendenteDemanda } from "../../../../../models/AtendenteDemanda";
import ComentarioInternoTextArea from "./ComentarioInternoTextArea";
import DescricaoTextArea from "./DescricaoTextArea";
import StatusDropdown from "./StatusDropdown";
import "./css/ExecutarModal.css";

interface Props {
  demanda: AtendenteDemanda;
  onClose: () => void;
}

const ExecutarModal = ({ demanda, onClose }: Props) => {
  const [status, setStatus] = useState("Selecione");
  const [descricao, setDescricao] = useState('');
  const [comentarioInterno, setComentarioInterno] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (status === "Selecione") {
      alert("Selecione um status para tramitar a demanda.");
      return;
    }

    alert(`Status: ${status}\nDescrição: ${descricao}\nComentário Interno: ${comentarioInterno}`);
  };

  return (
    <div className="executar-modal-container">
      <div className="executar-modal">
        <div className="executar-modal-header">
          <span className="executar-titulo">Executar Demanda</span>
          <p className="executar-close" onClick={() => onClose()}>&times;</p>
        </div>
        <form className="executar-modal-content" onSubmit={(e) => handleSubmit(e)}>
          <div className="executar-modal-content-inputs">
            <StatusDropdown value={status} onChange={setStatus} />
            <DescricaoTextArea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            <ComentarioInternoTextArea value={comentarioInterno} onChange={(e) => setComentarioInterno(e.target.value)} />
          </div>
            <div className="executar-modal-button-container">
              <button className="executar-modal-button-salvar" type="submit">Salvar</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ExecutarModal;
