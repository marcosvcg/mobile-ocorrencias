import { useState, type ReactNode } from 'react';
import './css/FiltrarPorDropdown.css';

interface Props {
  children: ReactNode;
}

const options = [
  'Filtrar por',
  'CPF',
  'Protocolo',
  'Situação',
  'Serviço'
];

const FiltrarPorDropdown = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Filtrar por');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="filtrar-dropdown">
      <div className="dropdown-button" onClick={toggleDropdown}>
        <span>{selected}</span>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map(option => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="dropdown-item"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {selected !== "Filtrar por" && children}
    </div>
  );
};

export default FiltrarPorDropdown;
