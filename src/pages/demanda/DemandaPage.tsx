import type { AtendenteDemanda } from "../../models/AtendenteDemanda";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Spinner from "../../components/Spinner";
import "./DemandaPage.css";

function DemandaPage() {
  const [demanda, SetDemanda] = useState<AtendenteDemanda>();
  const { protocolo } = useParams<{ protocolo: string }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDadosDemanda() {
      if (!protocolo) return;

      setLoading(true);

      try {
        console.log("--- fetchObterDetalhesDemanda aqui! ---");
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

      {!loading && (
        <>
            <p>testes demanda</p>
        </>
      )}
    </>
  );
}

export default DemandaPage;
