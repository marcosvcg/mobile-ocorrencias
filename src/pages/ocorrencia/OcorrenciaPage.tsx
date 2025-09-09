import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Ocorrencia } from "../../models/Ocorrencia";
import { fetchDetalhesOcorrencia } from "../../service/apiForms";
import NavBar from "../../components/NavBar";
import InformacoesOcorrencia from "./components/InformacoesOcorrencia";
import Spinner from "../../components/Spinner";

function OcorrenciaPage() {
    const { identificador } = useParams<{ identificador: string }>();
    const [ocorrencia, setOcorrencia] = useState<Ocorrencia>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const obterDetalhesOcorrencia = (identificador: string) => {
        fetchDetalhesOcorrencia(identificador)
            .then((data) => {
                setOcorrencia(data)
            })
            .catch(() => setError("Erro ao buscar ocorrências"))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        if(identificador)
        obterDetalhesOcorrencia(identificador);
    }, []);

    return (
        <>
        <NavBar />
        {loading && <Spinner />}
        {error && <p>{error}</p>}

        {!loading && !error && ocorrencia &&
        <InformacoesOcorrencia
            cpf={ocorrencia.cpf}
            protocolo={ocorrencia.protocolo}
            identificador={ocorrencia.identificador}
            flow={ocorrencia.flow}
        />}
        </>
    )
}

export default OcorrenciaPage;