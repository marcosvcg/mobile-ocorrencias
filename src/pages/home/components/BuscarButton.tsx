import { filtroMap, type FiltroLabel } from "../../../models/Filtros";

interface Props {
  filtroSelecionado: FiltroLabel;
  statusSelecionado: string;
  busca: string;
  onBuscar: (status: string, filtro: FiltroLabel, valor: string) => void;
}

const BuscarButton = ({ filtroSelecionado, busca, statusSelecionado, onBuscar }: Props) => {
  const filtro = filtroMap[filtroSelecionado];

  const handleClick = () => {
    onBuscar(statusSelecionado, filtro, busca);
  }

  return <button disabled={filtroSelecionado === "Filtrar por"} onClick={handleClick}>Buscar</button>
}

export default BuscarButton