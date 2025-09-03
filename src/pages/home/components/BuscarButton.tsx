import { filtroMap, type FiltroLabel } from "../../../models/Filtros";

interface Props {
  filtroSelecionado: FiltroLabel;
  busca: string;
  status: string;
  onBuscar: (status: string, filtro: FiltroLabel, valor: string) => void;
}

const BuscarButton = ({ filtroSelecionado, busca, status, onBuscar }: Props) => {
  const filtro = filtroMap[filtroSelecionado];

  const handleClick = () => {
    onBuscar(status, filtro, busca);
  }

  return <button disabled={filtroSelecionado === "Filtrar por"} onClick={handleClick}>Buscar</button>
}

export default BuscarButton