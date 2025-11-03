import type { Ocorrencia } from "../../../../../models/Ocorrencia";

interface Props {
  ocorrencia: Ocorrencia;
  ordem: number;
}

const HistoricoTableItem = ({ ocorrencia, ordem }: Props) => {
  const obterCorPeloStatus = (status: string): string => {
  switch (status) {
    case "Solicitado":
      return "#006affff";
    case "Encaminhado":
      return "#e3b325ff";
    case "Em Andamento":
      return "#e3b325ff";
    case "Concluído":
      return "#4ca84fff";
    default:
        if(status.includes("Cancelado")) return "#F44336";
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
        <td className="td-status"
        style={{
          backgroundColor: obterCorPeloStatus(ocorrencia.historico[ordem].status)
          }}>
          {ocorrencia.historico[ordem].status}
        </td>
      </tr>
      <tr>
        <th>Órgão/Setor:</th>
        <td>{ocorrencia.historico[ordem].orgao}
          {ocorrencia.historico[ordem].setor !== null
            ? ' / ' + ocorrencia.historico[ordem].setor
            : ''
          }
        </td>
      </tr>
      <tr>
        <th>Tramitado em:</th>
        <td>{new Date(ocorrencia.historico[ordem].updated_at).toLocaleString()}</td>
      </tr>
      <tr>
        <th>Atendente:</th>
        <td>{ocorrencia.atendente?.nome
          ? ocorrencia.atendente.nome
          : 'Não consta'}
        </td>
      </tr>
      <tr style={{ backgroundColor: "#ffffff" }}>
        <th>Descrição:</th>
        <td>{ocorrencia.historico[ordem].descricao}</td>
      </tr>

      {ordem + 1 !== ocorrencia.historico.length && (
        <tr>
          <td // espacamento no final!
            style={{
              height: "4vh",
              border: "none",
              backgroundColor: "#ecf2fc",
            }}
          ></td>
        </tr>
      )}
    </>
  );
};

export default HistoricoTableItem;
