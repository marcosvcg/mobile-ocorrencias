import "./css/HistoricoTable.css";
import HistoricoTableItem from "./HistoricoTableItem";

const HistoricoTable = () => {
  return (
    <table className="historico-table">
      <tbody className="historico-table-header">
        <HistoricoTableItem />
        <HistoricoTableItem />
        <HistoricoTableItem />
      </tbody>
    </table>
  );
};

export default HistoricoTable;
