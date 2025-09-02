import type { FiltroLabel } from '../../../models/Filtros';
import { useState } from 'react';
import BuscarButton from './BuscarButton';
import FiltrarPorDropdown from './FiltrarPorDropdown';
import './css/FilterDiv.css';

interface Props {
  onBuscar: (filtro: FiltroLabel, valor: string) => void;
}

const FilterDiv = ({ onBuscar }: Props) => {
  const [filtroSelecionado, setFiltroSelecionado] = useState('Filtrar por');
  const [busca, setBusca] = useState('');

  return (
    <div className="filter-div">
      <FiltrarPorDropdown 
        filtroSelecionado={filtroSelecionado}
        setFiltroSelecionado={setFiltroSelecionado}
        busca={busca}
        setBusca={setBusca}
      />
      <BuscarButton
        filtroSelecionado={filtroSelecionado}
        busca={busca}
        onBuscar={onBuscar}
      />
    </div>
  );
};

export default FilterDiv;