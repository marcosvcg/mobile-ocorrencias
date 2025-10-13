/*

Nao me perguntem pq mas a MSB decidiu criar 2 objetos
diferentes pro modulo do Atendimento156, entao essa
interface representa os resultados da lista de registros
enquanto a interface AtendenteDemanda representa o objeto
da solicitacao em si, contendo as informacoes necessarias

*/

export interface DemandaAtendente {
  id: string; // esse id eh um UUID
  tipo: string;
  nome: string; // nome do requerente
  cpf: string; // cpf do requerente
  servico_titulo: string;
  servico_slug: string;
  status: string;
  protocolo: string;
  atendente_nome: string;
  atendente_id: string; // cpf do atendente
  orgao: string;
  created_at: string;
  updated_at: string;
  orgao_nome: string;
  orgao_slug: string;
  para: string; // "Serviço"
  descricao: string | null; // 
  motivo_insatisfacao: string | null;
  informacao_util: boolean;
  protocolo_relacionado: string | null;
  tipo_identificacao: string;
  canal: string;
  local_nome: string | null;
  permitir_cancelamento_cidadao: boolean;
  motivo_integracao_externa: string | null;
  protocolos_relacionados: string | null;
  setor_sigla: string;
  setor_nome: string;
  setor_id: string;
  email: string | null;
  usuario_nunca_logou: boolean;

  avaliacao: {
    id: string;
    pendente: boolean;
    avaliacao_consumo: number | null;
    avaliacao_atendimento: number | null;
    comentario_consumo: string | null;
    comentario_atendimento: string | null;
    demanda: string;
    created_at: string;
    updated_at: string;
    servico_titulo: string;
    tipo_demanda: string;
  }[];

  [key: string]: any;
}