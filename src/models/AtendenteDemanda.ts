// interface que sera usada para obter os dados da solicitacao

export interface AtendenteDemanda {
  id: number; // esse id nao eh um UUID, passar o id de DemandaAtendente como identificador
  protocolo: string;
  conteudo: string;
  tipo_identificacao: string;
  canal_entrada: string;

  status_demanda: {
    status: string;
    descricao: string;

    historico_status_demanda: {
      ordem: number;
      status: string;
      descricao: string;
      comentario_interno: string | null;
      orgao_nome: string;
      setor_nome: string;
      restituicao_demanda: any | null;

      user_data: {
        cpf: string;
        nome: string;
      };

      created_at: string;

      anexos: any[];
    }[];

    anexos_status_demanda: any[];
    restituicao_demanda: any[];
    updated_at: string;
  };

  anexos_demanda: any[];

  servico_slug: string;
  servico_titulo: string;
  servico_descricao: string;

  vencimento: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string | null;
  bairro: string;
  cidade: string;
  estado: string;

  created_at: string;
  updated_at: string;

  orgao_nome: string;

  avaliacao_demanda: {
    id: string;
    pendente: boolean;
    avaliacao: number;
    comentario: string | null;
  };

  aceite: any | null;
  local_nome_vinculado: string | null;

  dados_pessoais: {
    cpf: string;
    nome: string;
  };

  setor_nome: string;
  protocolo_atendimento_vinculado: string | null;
  liberacoes_demanda: any[];

  [key: string]: any;
}
