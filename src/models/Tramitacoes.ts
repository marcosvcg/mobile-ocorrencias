export interface Tramitacoes {
  tramitacao_id: number;
  ordem: number;
  atividade: string;
  status: string;
  descricao: string;
  tramitacao_concluida_id: number | null;
}