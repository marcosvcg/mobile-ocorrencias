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
  const response = await apiForms.get('/solicitacoes/');
  return response.data.results;
}

export default { fetchOcorrencias };
