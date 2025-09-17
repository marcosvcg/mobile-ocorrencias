export interface Ocorrencia {
  id: number;
  protocolo: string;
  status: string;
  cpf: string;
  created_at: string;
  servico_titulo: string;

  atendente: {
    id: number;
    nome: string;
    atendente: string;
  };
  
  flow: {
    slug: string;
    titulo: string;
    tipo_execucao: string;
  };

  historico: {
    status: string;
    descricao: string;
    identificador: string;
    updated_at: string;
    hash: string | null;
    assinado: boolean;
    assinado_por: string;
    orgao: string;
    setor: string;
  }[];

  orgao: {
    sigla: string;
    nome: string;
  };

  setor: {
    sigla: string;
    nome: string;
  };

  documentos_solicitacao: {
    id: string;
    titulo: string;
    conformidade: boolean;
    verificado_em: string;
    verificado_por: {
      cpf: string;
      nome: string;
    };
    created_at: string;
  }[];

  documento_resposta: {
    id: string;
    assunto: string;
    conteudo: string;
    user: {
      username: string;
      first_name: string;
    };
  }[];

  arquivos_recebidos: {
    id: string;
    url: string;
    resposta: string;
    nome: string;
    size: number;
  }[];

  [key: string]: any;
}