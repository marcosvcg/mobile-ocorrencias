import FilterDiv from "./components/FilterDiv";
import NavBar from "../../components/NavBar";
import OcorrenciasList from "./components/OcorrenciasList";
import { fetchOcorrencias, fetchOcorrenciasPorFiltro } from "../../service/apiForms";
import type { FiltroLabel } from "../../models/Filtros";
import type { Ocorrencia } from "../../models/Ocorrencia";
import { useEffect, useState } from "react";

function HomePage() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const obterOcorrencias = () => {
    fetchOcorrencias()
      .then(setOcorrencias)
      .catch(() => setError("Erro ao carregar ocorrências"))
      .finally(() => setLoading(false));
  }

  // Busca inicial
  useEffect(() => {
    obterOcorrencias()
  }, []);

// Função que será chamada pelo botão "Buscar"
  const buscarOcorrencias = (filtro: FiltroLabel, valor: string) => {
    if (!valor.trim()) return obterOcorrencias();

    setLoading(true);
    setError(null);

    fetchOcorrenciasPorFiltro(filtro, valor)
      .then(setOcorrencias)
      .catch(() => setError("Erro ao buscar ocorrências"))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <NavBar />
      <FilterDiv onBuscar={buscarOcorrencias} />
      {loading && <p>Carregando ocorrências...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <OcorrenciasList ocorrencias={ocorrencias} />}
    </>
  );
}

export default HomePage;
