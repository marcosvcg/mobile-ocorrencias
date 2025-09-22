import type { Ocorrencia } from "../models/Ocorrencia";
import type { Tramitacoes } from "../models/Tramitacoes";

export function obterTramitacaoNaoConcluida(tramitacoes: Tramitacoes[], ocorrencia: Ocorrencia): Tramitacoes | null {
  let alvo: Tramitacoes | undefined;

  if (ocorrencia.status === "Solicitado") {
    // Última tramitacao concluída (ordem mais alta com ID preenchido)
    alvo = [...tramitacoes]
      .filter(t => t.tramitacao_concluida_id !== null)
      .sort((a, b) => b.ordem - a.ordem)[0];
  } else {
    // Primeira tramitacao não concluída (ordem mais baixa com ID nulo)
    alvo = [...tramitacoes]
      .filter(t => t.tramitacao_concluida_id === null)
      .sort((a, b) => a.ordem - b.ordem)[0];
  }

  return alvo ?? null;
}
