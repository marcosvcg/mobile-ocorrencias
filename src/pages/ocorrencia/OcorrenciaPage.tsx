import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Ocorrencia } from "../../models/Ocorrencia";
import { fetchDetalhesOcorrencia } from "../../service/apiForms";
import NavBar from "../../components/NavBar";
import InformacoesOcorrencia from "./components/InformacoesOcorrencia";
import Spinner from "../../components/Spinner";
import TratamentoButton from "./components/TratamentoButton";
import HistoricoButton from "./components/HistoricoButton";
import VisualizarOcorrenciaButton from "./components/VisualizarOcorrenciaButton";
import EvidenciasButton from "./components/EvidenciasButton";
import EnviarFotosButton from "./components/EnviarFotosButton";
import { fetchObterNomePeloCPF } from "../../service/apiBackend";

function OcorrenciaPage() {
    const { identificador } = useParams<{ identificador: string }>();
    const [ocorrencia, setOcorrencia] = useState<Ocorrencia>();
    const [loading, setLoading] = useState(true);
    const [nome, setNome] = useState<string | null>(null);

    const obterDetalhesOcorrencia = (identificador: string) => {
        fetchDetalhesOcorrencia(identificador)
            .then((data) => {
                obterNomePeloCPF(data);
                setOcorrencia(data)
            })
            .finally(() => setLoading(false));
    }

    const obterNomePeloCPF = (ocorrencia: Ocorrencia) => {
        fetchObterNomePeloCPF(ocorrencia.cpf)
            .then((nome) => {
                setNome(nome);
            })
    }

    useEffect(() => {
        if (identificador) obterDetalhesOcorrencia(identificador);
    }, []);

    return (
        <>
            <NavBar />
            {loading && !nome && <Spinner />}

            {!loading && ocorrencia && nome &&
            <>
                <InformacoesOcorrencia
                    atendente={ocorrencia.atendente}
                    nome={nome}
                    cpf={ocorrencia.cpf}
                    protocolo={ocorrencia.protocolo}
                    flow={ocorrencia.flow}
                />
                <TratamentoButton ocorrencia={ocorrencia} />    

                <HistoricoButton ocorrencia={ocorrencia} />
                <EnviarFotosButton ocorrencia={ocorrencia} />
                <VisualizarOcorrenciaButton ocorrencia={ocorrencia} />
                <EvidenciasButton ocorrencia={ocorrencia} />
            </>
            }
        </>
    )
}

export default OcorrenciaPage;