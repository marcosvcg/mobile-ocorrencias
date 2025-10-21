import type { AtendenteDemanda } from "../../../models/AtendenteDemanda";
import { formatarCPF } from "../../../util/formatarCPF";
import "./css/InformacoesDemanda.css";

type InformacoesDemandaProps = {
    demanda: AtendenteDemanda;
}

const InformacoesDemanda = ({ demanda }: InformacoesDemandaProps) => {
  const atendente = demanda.historico.at(-1)?.atendente_nome;

  return (
    <div className="informacoes-demanda">
      <h3>{demanda.servico_titulo}</h3>

      <p><strong>Atendente:</strong> {!atendente ? 'Não consta' : atendente}</p>
      <p><strong>Requerente:</strong> {!demanda.requerente.nome ? 'Não consta' : demanda.requerente.nome}</p>
      <p><strong>CPF:</strong> {formatarCPF(demanda.requerente.cpf)}</p>
      <p><strong>Protocolo:</strong> {demanda.protocolo}</p>
      <p><strong>Status:</strong> {demanda.historico.at(-1)?.status}</p>
    </div>
  );
};

export default InformacoesDemanda;