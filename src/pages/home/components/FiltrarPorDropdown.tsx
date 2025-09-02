import { filtroMap, type FiltroLabel } from "../../../models/Filtros";
import { useState } from "react";
import "./css/FiltrarPorDropdown.css";

interface Props {
  filtroSelecionado: FiltroLabel;
  setFiltroSelecionado: (option: string) => void;
  busca: string;
  setBusca: (value: string) => void;
}

const options = Object.keys(filtroMap) as FiltroLabel[];

const FiltrarPorDropdown = ({ filtroSelecionado, setFiltroSelecionado, busca, setBusca }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelecionarFiltro = (option: string) => {
    setFiltroSelecionado(option);
    setIsOpen(false);
  };

  return (
    <div className="filtrar-dropdown">
      <div className="dropdown-button" onClick={toggleDropdown}>
        <span>{filtroSelecionado}</span>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelecionarFiltro(option)}
              className="dropdown-item"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {filtroSelecionado !== "Filtrar por" && (
        <input
          className="digite-sua-busca"
          type="text"
          placeholder="Digite sua busca"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      )}
    </div>
  );
};

export default FiltrarPorDropdown;
