import axios from 'axios';
import Cookies from 'js-cookie';

const apiForms = axios.create({
  baseURL: import.meta.env.VITE_API_FORMS,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiForms.interceptors.request.use(config => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function fetchOcorrenciasPorFiltros(
  status: string,
  filtro?: string,
  busca?: string,
  page: number = 1
) {
  const response = await apiForms.get(`/solicitacoes/?status=${status}&filtro=${filtro}&busca=${busca}&page=${page}`);
  const { results, total_pages } = response.data;
  console.log("-Resultado: " + status + ' ' + filtro + ' ' + busca + ' ' + page)
  return { results, total_pages };
}

export async function fetchDetalhesOcorrencia(identificador: string) {
  const response = await apiForms.get(`/carregar_solicitacao?identificador=${identificador}`);
  console.log("Detalhes da Ocorrência: \n" + response.data);
  return response.data;
}

export async function fetchAlterarAtendente(id: number, atendente: string) {
  const body = { atendente: atendente };
  await apiForms.put(`/alterar-atendente/${id}/`, body);
  console.log("- Novo atendente: " + atendente);
}

export async function fetchAceitarDocumentoSolicitacao(identificadorDocumento: string, identificadorSolicitacao: string) {
  const body = {
    id: identificadorDocumento,
    conformidade: true
  };
  await apiForms.put(`/documentos-solicitacao/${identificadorDocumento}/?identificador_solicitacao=${identificadorSolicitacao}`, body);
  console.log("- Documento aceito!")
}