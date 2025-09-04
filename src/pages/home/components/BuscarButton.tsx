import { filtroMap, type FiltroLabel } from "../../../models/Filtros";

interface Props {
  filtroSelecionado: FiltroLabel;
  statusSelecionado: string;
  busca: string;
  onBuscar: (filtro: FiltroLabel, busca: string) => void;
}

const BuscarButton = ({ filtroSelecionado, busca, onBuscar }: Props) => {
  const filtro = filtroMap[filtroSelecionado];

  const handleClick = () => {
    onBuscar(filtro, busca);
  }

  return <button disabled={filtroSelecionado === "Filtrar por"} onClick={handleClick}>Buscar</button>
}

export default BuscarButton