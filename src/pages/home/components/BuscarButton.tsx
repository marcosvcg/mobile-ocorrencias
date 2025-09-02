import { filtroMap, type FiltroLabel } from "../../../models/Filtros";

interface Props {
  filtroSelecionado: FiltroLabel;
  busca: string;
  onBuscar: (filtro: FiltroLabel, valor: string) => void;
}

const BuscarButton = ({ filtroSelecionado, busca, onBuscar }: Props) => {
  const filtro = filtroMap[filtroSelecionado];

  const handleClick = () => {
    console.log(`-Resultado: ${filtro}, ${busca}`)
    onBuscar(filtro, busca);
  }

  return <button disabled={filtroSelecionado === "Filtrar por"} onClick={handleClick}>Buscar</button>
}

export default BuscarButton