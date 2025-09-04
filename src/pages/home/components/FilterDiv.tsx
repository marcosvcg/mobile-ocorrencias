import type { FiltroLabel } from '../../../models/Filtros';
import BuscarButton from './BuscarButton';
import FiltrarPorDropdown from './FiltrarPorDropdown';
import './css/FilterDiv.css';
import FiltrarStatus from './FiltrarStatus';

interface Props {
  statusSelecionado: string;
  setStatusSelecionado: (status: string) => void;
  filtroSelecionado: FiltroLabel;
  setFiltroSelecionado: (filtro: FiltroLabel) => void;
  busca: string;
  setBusca: (valor: string) => void;
  onBuscar: (busca: string) => void;
  onStatusSelecionado: (status: string) => void;
}

const FilterDiv = ({
  statusSelecionado,
  setStatusSelecionado,
  filtroSelecionado,
  setFiltroSelecionado,
  busca,
  setBusca,
  onBuscar,
  onStatusSelecionado,
}: Props) => {
  return (
    <div className="filter-div">
      <FiltrarStatus 
        statusSelecionado={statusSelecionado}
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
        statusSelecionado={statusSelecionado}
        busca={busca}
        onBuscar={onBuscar}
      />
    </div>
  );
};


export default FilterDiv;