import axios from 'axios';

const apiForms = axios.create({
  baseURL: import.meta.env.VITE_API_FORMS,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiForms.interceptors.request.use(config => {
  const token = import.meta.env.VITE_AUTH_TOKEN; // APENAS PARA TESTES, PUXAR TOKEN ATRAVÉS DE COOKIES HTTP-ONLY!
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