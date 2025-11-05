import { useState } from "react";
import "./css/StatusDropdown.css";

const StatusDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [statusSelecionado, setStatusSelecionado] = useState("Selecione");

  const options = [
    "Selecione",
    "Em Andamento",
    "Encaminhado",
    "Arquivado",
    "Complementação Cidadão",
    "Concluído",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelecionarStatus = (option: string) => {
    setStatusSelecionado(option);
    setIsOpen(false);
  };

  return (
    <div className="status-dropdown" onMouseLeave={() => setIsOpen(false)}>
        <div className="status-dropdown-container">
            <span className="status-dropdown-titulo">Status</span>
        <div className="status-dropdown-button" onClick={toggleDropdown}>
            <span>
            {statusSelecionado}
            </span>
            <span className="arrow">{isOpen ? "▲" : "▼"}</span>
        </div>
      </div>

      {isOpen && (
        <ul className="status-dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              onClick={() =>
                option === "Selecione" ? "" : handleSelecionarStatus(option)
              }
              className="status-dropdown-item"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatusDropdown;
