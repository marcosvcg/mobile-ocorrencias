import type { Ocorrencia } from "../../models/Ocorrencia";
import type { Tramitacoes } from "../../models/Tramitacoes";
import { useCidadao } from "../../util/CidadaoProvider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchObterNomePeloCPF, fetchObterTramitacoesPeloProtocoloEFlowSlug } from "../../service/apiBackend";
import { fetchDetalhesOcorrencia } from "../../service/apiForms";
import { obterTramitacaoNaoConcluida } from "../../util/obterTramitacaoNaoConcluida";
import NavBar from "../../components/NavBar";
import InformacoesOcorrencia from "./components/InformacoesOcorrencia";
import Spinner from "../../components/Spinner";
import IniciarButton from "./components/IniciarButton";
import HistoricoButton from "./components/HistoricoButton";
import VisualizarOcorrenciaButton from "./components/VisualizarOcorrenciaButton";
import EvidenciasButton from "./components/EvidenciasButton";
import RegistrosButton from "./components/RegistrosButton";
import TramitarButton from "./components/TramitarButton";
import "./OcorrenciaPage.css";

function OcorrenciaPage() {
  const { identificador } = useParams<{ identificador: string }>();
  const [ocorrencia, setOcorrencia] = useState<Ocorrencia>();
  const [tramitacao, setTramitacao] = useState<Tramitacoes | null>(null);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState<string | null>(null);
  const { dadosCidadao } = useCidadao();

  useEffect(() => {
    async function carregarDadosOcorrencia() {
      if (!identificador) return;

      setLoading(true);

      try {
        const ocorrenciaData = await fetchDetalhesOcorrencia(identificador);
        setOcorrencia(ocorrenciaData);

        const [nomeData, tramitacoes] = await Promise.all([
          fetchObterNomePeloCPF(ocorrenciaData.cpf),
          fetchObterTramitacoesPeloProtocoloEFlowSlug(
            ocorrenciaData.protocolo,
            ocorrenciaData.flow.id
          ),
        ]);

        setNome(nomeData);

        if (Array.isArray(tramitacoes)) {
          const tramitacaoEncontrada = obterTramitacaoNaoConcluida(
            tramitacoes,
            ocorrenciaData
          );
          
          !tramitacaoEncontrada // se nao houver nenhuma tramitacao pendente, retorna a tramitacao ultima concluida
            ? setTramitacao(tramitacoes[tramitacoes.length - 1]) 
            : setTramitacao(tramitacaoEncontrada);
        }
      } finally {
        setLoading(false);
      }
    }

    carregarDadosOcorrencia();
  }, [identificador]);

  const cidadaoEstaAtendendoEssaSolicitacao =
    ocorrencia &&
    Array.isArray(dadosCidadao) &&
    dadosCidadao[0].cpf !== ocorrencia.atendente?.atendente;

  return (
    <>
      <NavBar />
      {loading && <Spinner />}

      {!loading && ocorrencia && tramitacao && (
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
            <TramitarButton ocorrencia={ocorrencia} tramitacao={tramitacao} /> // alterar para TramitacaoButton
          )}

          <div className="botoes-ocorrencia-container">
            <HistoricoButton ocorrencia={ocorrencia} />
            <RegistrosButton ocorrencia={ocorrencia} tramitacao={tramitacao} />
            <VisualizarOcorrenciaButton ocorrencia={ocorrencia} />
            <EvidenciasButton ocorrencia={ocorrencia} />
          </div>
        </>
      )}
    </>
  );
}

export default OcorrenciaPage;
