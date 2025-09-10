import axios from 'axios';
import Cookies from 'js-cookie';

const apiSSO = axios.create({
  baseURL: import.meta.env.VITE_API_SSO,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiSSO.interceptors.request.use(config => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/*
apiSSO.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      window.location.href = import.meta.env.VITE_SSO_LOGOUT;
    }
    return Promise.reject(error);
  }
);
*/

export async function validarToken(code: string) {
  const dados = {
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    code: code,
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET
  };
  
  apiSSO.post('/validar/', dados)
    .then(response => {
      Cookies.set('token', response?.data?.access_token, { 
        secure: false,
        expires: 1
      });
    })
}

export async function checarToken(): Promise<boolean> {
  if (Cookies.get('token')) {
    return await apiSSO.get('/checar/');
  }
  return false;
}

export async function fetchFotoCidadao(): Promise<string | null> {
  try {
    const response = await apiSSO.get('/cidadaos/foto/');
    const results = response.data?.results;

    if (Array.isArray(results) && results.length > 0 && results[0].arquivo) {
      return results[0].arquivo;
    }

    return null; // caso o cidadao nao possua foto
  } catch (error) {
    console.error('Erro ao buscar a foto do cidadão:', error);
    return null;
  }
}

export async function fetchDadosCidadao(): Promise<any | null> {
  try {
    const response = await apiSSO.get('/cidadaos/pro/');
    const results = response.data;

    if (results) return results;

    return null;
  } catch (error) {
    console.error('Erro ao buscar dados do cidadão:', error);
    return null;
  }
}