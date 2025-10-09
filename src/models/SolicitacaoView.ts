// ViewModel (dados necessarios para o componente OcorrenciaCard)
export interface SolicitacaoView {
  identificador: string;
  cpf: string;
  status: string;
  protocolo: string;
  created_at: string;
  servico_titulo: string;
  atendente: {
    username: string;
    first_name: string;
  };
}