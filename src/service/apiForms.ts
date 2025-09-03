import axios from 'axios';

const apiForms = axios.create({
  baseURL: import.meta.env.VITE_API_FORMS,
  timeout: 10000,
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

export async function fetchOcorrencias() {
  const response = await apiForms.get('/solicitacoes/?status=Solicitado');
  return response.data.results;
}

export async function fetchOcorrenciasPorPagina(
  page: number = 1
) {
  const response = await apiForms.get(`/solicitacoes/?page=${page}`);
  return response.data.results;
}

export async function fetchOcorrenciasPorFiltros(
  status: string = 'Solicitado',
  filtro?: string,
  busca?: string,
  page: number = 1
) {
  const response = await apiForms.get(`/solicitacoes/?status=${status}&filtro=${filtro}&busca=${busca}&page=${page}`);
  return response.data.results;
}