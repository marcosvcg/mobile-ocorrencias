import { useState } from "react";
import { statusArray } from "../../../models/Status";
import type { FiltroLabel } from "../../../models/Filtros";
import "./css/FiltrarStatus.css";

interface Props {
  statusSelecionado: string;
  setStatusSelecionado: (status: string) => void;
  onStatusSelecionado: (status: string, filtro?: FiltroLabel, valor?: string) => void;
}

const status = statusArray;

const FiltrarStatus = ({ statusSelecionado, setStatusSelecionado, onStatusSelecionado }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelecionarStatus = (status: string) => {
    setStatusSelecionado(status);
    setIsOpen(false);
    onStatusSelecionado(status);
  };

  return (
    <div className="filtrar-status">
      <div className="status-button" onClick={toggleDropdown} onMouseOut={() => setIsOpen(false)}>
        <span>{statusSelecionado}</span>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <ul className="status-menu">
          {status.map((status) => (
            <li
              key={status}
              onClick={() => handleSelecionarStatus(status)}
              className="status-item"
            >
              {status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FiltrarStatus;
