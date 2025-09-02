export interface Ocorrencia {
  id: number;
  protocolo: string;
  status: string;
  cpf: string;
  created_at: string;
  flow: {
    slug: string;
    titulo: string;
    tipo_execucao: string;
  };
  orgao: {
    sigla: string;
    nome: string;
  };
  setor: {
    sigla: string;
    nome: string;
  };
  documento_resposta: {
    id: string;
    assunto: string;
    conteudo: string;
    user: {
      username: string;
      first_name: string;
    };
  }[];
  [key: string]: any; // para ignorar temporariamente campos que você ainda não usa
}