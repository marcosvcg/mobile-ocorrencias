// ViewModel (dados necessarios para o componente OcorrenciaCard)
export interface SolicitacaoView {
  identificador: string;
  cpf: string | null;
  status: string;
  protocolo: string;
  created_at: string;
  servico_titulo: string;
  atendente: {
    username: string | null;
    first_name: string | null;
  } | null;
  tipo: string;
}