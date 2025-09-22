import type { Ocorrencia } from "../../../models/Ocorrencia";
import { formatarCPF } from "../../../util/formatarCPF";
import "./css/InformacoesOcorrencia.css";

type InformacoesOcorrenciaProps = Pick<Ocorrencia, 'flow' | 'atendente' | 'nome' | 'cpf' | 'protocolo' | 'progresso'>;

const InformacoesOcorrencia = ({
  flow, atendente, nome, cpf, protocolo, progresso
}: InformacoesOcorrenciaProps) => {

  function getUltimaAtividadeConcluida(progresso: Ocorrencia["progresso"]): string | null {
    const concluidos = progresso
      .filter((item) => item.concluido)
      .sort((a, b) => b.ordem - a.ordem);

    return concluidos.length > 0 ? concluidos[0].atividade : "Ocorrência não tramitada.";
  }

  return (
    <div className="informacoes-ocorrencia">
      <h3>{flow.titulo}</h3>

      <p><strong>Atendente:</strong> {!atendente ? 'Não consta' : atendente.nome}</p>
      <p><strong>Requerente:</strong> {nome}</p>
      <p><strong>CPF:</strong> {formatarCPF(cpf)}</p>
      <p><strong>Protocolo:</strong> {protocolo}</p>
      <p><strong>Progresso:</strong> {getUltimaAtividadeConcluida(progresso)}</p>
    </div>
  );
};

export default InformacoesOcorrencia;