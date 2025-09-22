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
