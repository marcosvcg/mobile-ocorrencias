import type { FiltroLabel } from '../../../models/Filtros';
import { useState } from 'react';
import BuscarButton from './BuscarButton';
import FiltrarPorDropdown from './FiltrarPorDropdown';
import './css/FilterDiv.css';
import FiltrarStatus from './FiltrarStatus';

interface Props {
  onBuscar: (filtro: FiltroLabel, valor: string) => void;
  onStatusSelecionado: (status: string, filtro?: FiltroLabel, valor?: string) => void;
}

const FilterDiv = ({ onBuscar, onStatusSelecionado }: Props) => {
  const [statusSelecionado, setStatusSelecionado] = useState('Solicitado');
  const [filtroSelecionado, setFiltroSelecionado] = useState('Filtrar por');
  const [busca, setBusca] = useState('');

  return (
    <div className="filter-div">
      <FiltrarStatus 
        statusSelecionado={statusSelecionado}
        filtroSelecionado={filtroSelecionado}
        busca={busca}
        setStatusSelecionado={setStatusSelecionado}
        onStatusSelecionado={onStatusSelecionado}
      />
      <FiltrarPorDropdown 
        filtroSelecionado={filtroSelecionado}
        setFiltroSelecionado={setFiltroSelecionado}
        busca={busca}
        setBusca={setBusca}
      />
      <BuscarButton
        filtroSelecionado={filtroSelecionado}
        busca={busca}
        status={statusSelecionado}
        onBuscar={onBuscar}
      />
    </div>
  );
};

export default FilterDiv;