import type { Ocorrencia } from "../../models/Ocorrencia";
import { useCidadao } from "../../util/CidadaoProvider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchObterNomePeloCPF } from "../../service/apiBackend";
import { fetchDetalhesOcorrencia } from "../../service/apiForms";
import NavBar from "../../components/NavBar";
import InformacoesOcorrencia from "./components/InformacoesOcorrencia";
import Spinner from "../../components/Spinner";
import IniciarButton from "./components/IniciarButton";
import HistoricoButton from "./components/HistoricoButton";
import VisualizarOcorrenciaButton from "./components/VisualizarOcorrenciaButton";
import EvidenciasButton from "./components/EvidenciasButton";
import EnviarFotosButton from "./components/EnviarFotosButton";
import TramitarButton from "./components/TramitarButton";
import "./OcorrenciaPage.css";

function OcorrenciaPage() {
    const { identificador } = useParams<{ identificador: string }>();
    const [ocorrencia, setOcorrencia] = useState<Ocorrencia>();
    const [loading, setLoading] = useState(true);
    const [nome, setNome] = useState<string | null>(null);
    const { dadosCidadao } = useCidadao();

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

    const cidadaoEstaAtendendoEssaSolicitacao = ocorrencia 
        && Array.isArray(dadosCidadao) 
        && dadosCidadao[0].cpf !== ocorrencia.atendente?.atendente;

    return (
        <>
            <NavBar />
            {loading && !nome && <Spinner />}

            {!loading && ocorrencia && nome &&
            <>
                <InformacoesOcorrencia
                    flow={ocorrencia.flow}
                    atendente={ocorrencia.atendente}
                    nome={nome}
                    cpf={ocorrencia.cpf}
                    protocolo={ocorrencia.protocolo}
                    progresso={ocorrencia.progresso}
                />
                {cidadaoEstaAtendendoEssaSolicitacao ? ( 
                    <IniciarButton ocorrencia={ocorrencia} /> 
                ) : (
                    <TramitarButton ocorrencia={ocorrencia} /> // alterar para TramitacaoButton
                )}
                   
                <div className="botoes-ocorrencia-container">
                <HistoricoButton ocorrencia={ocorrencia} />
                <EnviarFotosButton ocorrencia={ocorrencia} />
                <VisualizarOcorrenciaButton ocorrencia={ocorrencia} />
                <EvidenciasButton ocorrencia={ocorrencia} />
                </div>
            </>
            }
        </>
    )
}

export default OcorrenciaPage;