export interface Tramitacoes {
  tramitacao_id: number;
  ordem: number;
  orgao_id: number;
  atividade: string;
  status: string;
  descricao: string;
  tramitacao_concluida_id: number | null;
}