import type { AtendenteDemanda } from "../../../../../models/AtendenteDemanda";

interface Props {
  demanda: AtendenteDemanda;
  ordem: number;
}

const HistoricoTableItem = ({ demanda, ordem }: Props) => {
  const obterCorPeloStatus = (status: string): string => {
    switch (status) {
      case "Em Aberto":
        return "#006affff";
      case "Encaminhado":
        return "#e3b325ff";
      case "Em Andamento":
        return "#e3b325ff";
      case "Concluído":
        return "#4ca84fff";
      default:
        if (status.includes("Cancelado")) return "#F44336";
        return "#65728cff";
    }
  };

  return (
    <>
      <tr>
        <th>Ordem:</th>
        <td>{ordem + 1}º</td>
      </tr>
      <tr>
        <th>Status:</th>
        <td
          className="td-status"
          style={{
            backgroundColor: obterCorPeloStatus(
              demanda.historico[ordem].status
            ),
          }}
        >
          {demanda.historico[ordem].status}
        </td>
      </tr>
      <tr>
        <th>Órgão/Setor:</th>
        <td>
          {demanda.historico[ordem].orgao_nome}
          {demanda.historico[ordem].setor !== null
            ? " / " + demanda.historico[ordem].setor
            : ""}
        </td>
      </tr>
      <tr>
        <th>Tramitado em:</th>
        <td>
          {new Date(demanda.historico[ordem].created_at).toLocaleString()}
        </td>
      </tr>
      <tr>
        <th>Atendente:</th>
        <td>
          {demanda.historico[ordem].atendente_nome
            ? demanda.historico[ordem].atendente_nome
            : "Não consta"}
        </td>
      </tr>
      <tr style={{ backgroundColor: "#ffffffff" }}>
        <th>Descrição:</th>
        <td>{demanda.historico[ordem].descricao}</td>
      </tr>

      {ordem + 1 !== demanda.historico.length && (
        <tr>
          <td // espacamento no final!
            style={{
              height: "4vh",
              border: "none",
              backgroundColor: "#ffffff",
            }}
          ></td>
        </tr>
      )}
    </>
  );
};

export default HistoricoTableItem;
