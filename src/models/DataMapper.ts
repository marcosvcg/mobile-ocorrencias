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
    atendente: {
      username: data.atendente.username, // "username" eh o cpf...
      first_name: data.atendente.first_name
    },
});

const mapDemandaAtendenteToView = (data: DemandaAtendente): SolicitacaoView => ({
    identificador: data.id,
    cpf: data.cpf,
    status: data.status,
    protocolo: data.protocolo,
    created_at: data.created_at,
    servico_titulo: data.servico_titulo,
    atendente: {
      username: data.atendente_id,
      first_name: data.atendente_nome
    },
});

export const DataMapper = {
  mapOcorrenciaToView,
  mapDemandaAtendenteToView,
};