import axios from 'axios';
import type { Tramitacoes } from '../models/Tramitacoes';

const apiBackend = axios.create({
    baseURL: import.meta.env.VITE_API_BACKEND,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function fetchObterNomePeloCPF(cpf: string) {
    const body = { cpf: cpf }
    try {
        const response = await apiBackend.post(`/consultar-nome`, body);
        return response.data;
    } catch (error) {
        return "Não encontrado.";
    }
}

export async function fetchObterConteudoDocumentoPeloID(id: string) {
    const body = { id: id }
    try {
        const response = await apiBackend.post(`/visualizar-ocorrencia`, body);
        return response.data;
    } catch (error) {
        return "Não encontrado.";
    }
}

export async function fetchObterTramitacoesPeloProtocoloEFlowSlug(protocolo: string, flow_slug: string): Promise<Tramitacoes[] | string> {
    const body = { protocolo, flow_slug };
    try {
        const response = await apiBackend.post<Tramitacoes[]>(`/obter-tramitacao`, body);
        return response.data;
    } catch (error) {
        return "Não encontrado.";
    }
}

export async function fetchObterSetorIdPorSigla(orgao_id: string, setores: string[] | null) {
    const body = { orgao_id: orgao_id, setores: setores }
    try {
        const response = await apiBackend.post(`/obter-setor`, body);
        return response.data;
    } catch (error) {
        return "Não encontrado.";
    }
}

export async function fetchObterDemandasPorFiltros(
    orgao_slug: string,
    setor_id?: string[], 
    status?: string,
    filtro?: string,
    valor?: string,
    page?: number
) {
    const body: Record<string, any> = {
        orgao_slug
    };

  if (Array.isArray(setor_id) && setor_id.length > 0) {
    body.setor_id = setor_id;
  }

  if (status) body.status = status;
  if (filtro) body.filtro = filtro;
  if (valor) body.valor = valor;
  if (page) body.page = page;
  
    try {
        const response = await apiBackend.post(`/obter-demandas`, body);
        return response.data;
    } catch (error) {
        return "Não encontrado.";
    }
}

export async function fetchObterDetalhesDemanda(protocolo: string) {
    const body = { protocolo };
    try {
        const response = await apiBackend.post(`/obter-demanda`, body);
        return response.data;
    } catch (error) {
        return "Não encontrado.";
    }
}