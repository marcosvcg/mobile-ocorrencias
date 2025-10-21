import type { AtendenteDemanda } from "../../models/AtendenteDemanda";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchObterDetalhesDemanda } from "../../service/apiBackend";
import NavBar from "../../components/NavBar";
import Spinner from "../../components/Spinner";
import InformacoesDemanda from "./components/InformacoesDemanda";
import ExecutarButton from "./components/ExecutarButton";
import VisualizarDemandaButton from "./components/VisualizarDemandaButton";
import "./DemandaPage.css";
import HistoricoButton from "./components/HistoricoButton";
import RegistrosButton from "./components/RegistrosButton";
import EvidenciasButton from "./components/EvidenciasButton";

function DemandaPage() {
  const [demanda, setDemanda] = useState<AtendenteDemanda>();
  const { protocolo } = useParams<{ protocolo: string }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDadosDemanda() {
      if (!protocolo) return;
      setLoading(true);

      try {
        const demandaData = await fetchObterDetalhesDemanda(protocolo);
        setDemanda(demandaData);
      } finally {
        setLoading(false);
      }
    }

    carregarDadosDemanda();
  }, [protocolo]);

  return (
    <>
      <NavBar />
      {loading && <Spinner />}

      {!loading && demanda && (
        <>
          <InformacoesDemanda demanda={demanda} />

          <ExecutarButton demanda={demanda} />

          <div className="botoes-demanda-container">
            <VisualizarDemandaButton demanda={demanda} />
            <HistoricoButton demanda={demanda} />
            <RegistrosButton demanda={demanda} />
            <EvidenciasButton demanda={demanda} />
          </div>
        </>
      )}
    </>
  );
}

export default DemandaPage;
