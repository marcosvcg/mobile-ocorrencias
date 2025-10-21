import type { AtendenteDemanda } from "../../models/AtendenteDemanda";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Spinner from "../../components/Spinner";
import "./DemandaPage.css";
import InformacoesDemanda from "./components/InformacoesDemanda";
import { fetchObterDetalhesDemanda } from "../../service/apiBackend";
import ExecutarButton from "./components/ExecutarButton";

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
            <InformacoesDemanda demanda={demanda}/>

            <ExecutarButton demanda={demanda}/>
        </>
      )}
    </>
  );
}

export default DemandaPage;
