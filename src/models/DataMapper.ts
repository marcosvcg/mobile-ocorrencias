import type { DemandaAtendente } from "./DemandaAtendente";
import type { SolicitacaoView } from "./SolicitacaoView";
import type { Ocorrencia } from "./Ocorrencia";

const mapOcorrenciaToView = (data: Ocorrencia): SolicitacaoView => ({
    identificador: data.identificador,
    cpf: data.cpf,
    status: data.status,
    protocolo: data.protocolo,
    created_at: data.created_at,
    servico_titulo: data.servico_titulo,
    atendente: data.atendente
    ? {
        username: data.atendente.username || null,
        first_name: data.atendente.first_name || null,
      }
    : null,
    tipo: "Solicitação Digital"
});

const mapDemandaAtendenteToView = (data: DemandaAtendente): SolicitacaoView => ({
    identificador: data.id,
    cpf: data.cpf,
    status: data.status,
    protocolo: data.protocolo,
    created_at: data.created_at,
    servico_titulo: data.servico_titulo,
    atendente: data.atendente
    ? {
        username: data.atendente_id || null,
        first_name: data.atendente_nome || null,
      }
    : null,
    tipo: "Solicitação/Serviço"
});

export const DataMapper = {
  mapOcorrenciaToView,
  mapDemandaAtendenteToView,
};