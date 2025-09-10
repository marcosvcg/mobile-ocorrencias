import { type FiltroLabel } from "../../../models/Filtros";

interface Props {
  filtroSelecionado: FiltroLabel;
  statusSelecionado: string;
  busca: string;
  onBuscar: (busca: string) => void;
}

const BuscarButton = ({ filtroSelecionado, busca, onBuscar }: Props) => {

  const handleClick = () => {
    onBuscar(busca);
  }

  return <button disabled={filtroSelecionado === "Filtrar por"} onClick={handleClick}>Buscar</button>
}

export default BuscarButton