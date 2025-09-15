import type { Ocorrencia } from "../../../../../models/Ocorrencia";
import HistoricoTableItem from "./HistoricoTableItem";
import "./css/HistoricoTable.css";

interface Props {
  ocorrencia: Ocorrencia;
}

const HistoricoTable = ({ ocorrencia }: Props) => {
  return (
    <table className="historico-table">
      <tbody className="historico-table-header">
          {ocorrencia.historico.map((_, ordem) => (
          <HistoricoTableItem
            key={ocorrencia.historico[ordem].identificador}
            ocorrencia={ocorrencia}
            ordem={ordem}
          />
        ))}
      </tbody>
    </table>
  );
};

export default HistoricoTable;
