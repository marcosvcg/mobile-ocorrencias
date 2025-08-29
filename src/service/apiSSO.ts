import axios from 'axios';

const apiSSO = axios.create({
  baseURL: import.meta.env.VITE_API_SSO,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiSSO.interceptors.request.use(config => {
  const token = import.meta.env.VITE_AUTH_TOKEN; // APENAS PARA TESTES, PUXAR TOKEN ATRAVÉS DE COOKIES HTTP-ONLY!
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function fetchFotoCidadao(): Promise<string | null> {
  try {
    const response = await apiSSO.get('/cidadaos/foto/');
    const results = response.data?.results;

    console.log(results);

    if (Array.isArray(results) && results.length > 0 && results[0].arquivo) {
      return results[0].arquivo;
    }

    return null; // caso o cidadao nao possua foto
  } catch (error) {
    console.error('Erro ao buscar a foto do cidadão:', error);
    return null;
  }
}

export default { fetchFotoCidadao };
