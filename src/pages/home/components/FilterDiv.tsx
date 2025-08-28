import './css/FilterDiv.css';
import BuscarButton from './BuscarButton';
import FiltrarPorDropdown from './FiltrarPorDropdown';

const FilterDiv = () => {
  return (
    <div className="filter-div">
      <FiltrarPorDropdown>
        <input className="digite-sua-busca" type="text" placeholder="Digite sua busca" />
      </FiltrarPorDropdown>
      <BuscarButton/>
    </div>
  );
};

export default FilterDiv;