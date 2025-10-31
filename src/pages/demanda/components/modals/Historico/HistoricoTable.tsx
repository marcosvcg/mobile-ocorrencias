import type { AtendenteDemanda } from "../../../../../models/AtendenteDemanda";
import HistoricoTableItem from "./HistoricoTableItem";
import "./css/HistoricoTable.css";

interface Props {
  demanda: AtendenteDemanda;
}

const HistoricoTable = ({ demanda }: Props) => {
  return (
    <table className="historico-table">
      <tbody className="historico-table-header">
          {demanda.historico.map((_, ordem) => (
          <HistoricoTableItem
            key={`${demanda.id}-${ordem}`}
            demanda={demanda}
            ordem={ordem}
          />
        ))}
      </tbody>
    </table>
  );
};

export default HistoricoTable;
