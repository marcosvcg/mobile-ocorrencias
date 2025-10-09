import axios from 'axios';
import Cookies from 'js-cookie';

const api156 = axios.create({
  baseURL: import.meta.env.VITE_API_156,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer',
  },
});

api156.interceptors.request.use(config => {
  //const token = Cookies.get('token');
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NTQ5NjEzNzAxMiIsIm5vbWUiOiJNRVUgTk9NRSIsImlzcyI6ImF0ZW5kaW1lbnRvMTU2LWhvbW8uc2FsdmFkb3IuYmEuZ292LmJyIiwiaWF0IjoxNzYwMDA4MjQ3NTA5LCJleHAiOjE3NjAxODEwNDc1MDh9.ye_jzco2LKQ2-0EEx1arfMdW6rFcUV6YBr2Dh4arJNo";
  if (token) {
    Cookies.set('token', token);
  }
  return config;
});

api156.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      Cookies.remove('token');
      window.location.href = import.meta.env.VITE_SSO_LOGOUT;
    }
    return Promise.reject(error);
  }
);

export async function fetchDemandasPorFiltros(
  status: string,
  filtro?: string,
  busca?: string,
  page: number = 1
) {
  const response = await api156.get(`/156/demanda_atendente?status=${status}&ordem=data_hora&${filtro}=${busca}&page=${page}`);
  const { results, total_pages } = response.data;
  return { results, total_pages };
}

export async function fetchDetalhesDemanda(protocolo: string) {
  const response = await api156.get(`/ouvidoria/atendente_demanda?protocolo=${protocolo}`);
  return response.data;
}