import FilterDiv from "./components/FilterDiv";
import NavBar from "../../components/NavBar";
import OcorrenciasList from "./components/OcorrenciasList";
import { fetchOcorrenciasPorFiltros } from "../../service/apiForms";
import { filtroMap, type FiltroLabel } from "../../models/Filtros";
import type { Ocorrencia } from "../../models/Ocorrencia";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Spinner from "../../components/Spinner";

function HomePage() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [statusSelecionado, setStatusSelecionado] = useState('Solicitado');
  const [filtroSelecionado, setFiltroSelecionado] = useState<FiltroLabel>('Filtrar por');
  const [busca, setBusca] = useState('');

  const obterOcorrencias = (
    status: string = statusSelecionado,
    filtro?: FiltroLabel,
    valor?: string,
    page?: number
  ) => {
    setLoading(true);
    setError(null);

    fetchOcorrenciasPorFiltros(status, filtro, valor, page)
      .then(({ results, total_pages }) => {
        setOcorrencias(results);
        setPageCount(total_pages);
      })
      .catch(() => setError("Erro ao buscar ocorrências"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    obterOcorrencias(statusSelecionado, filtroMap[filtroSelecionado], busca, currentPage);
  }, [currentPage]);

  return (
    <>
      <NavBar />
      <FilterDiv
        statusSelecionado={statusSelecionado}
        setStatusSelecionado={setStatusSelecionado}
        filtroSelecionado={filtroSelecionado}
        setFiltroSelecionado={setFiltroSelecionado}
        busca={busca}
        setBusca={setBusca}
        onBuscar={(busca) => {
          setCurrentPage(1); // resetar para primeira página
          setBusca(busca);
          obterOcorrencias(statusSelecionado, filtroMap[filtroSelecionado], busca);
        }}
        onStatusSelecionado={(status) => {
          setCurrentPage(1); // resetar para primeira página
          setStatusSelecionado(status);
          obterOcorrencias(status, filtroMap[filtroSelecionado], busca);
        }}
      />
      {loading && <Spinner />}
      {error && <p>{error}</p>}

      {!loading && !error && 
      <OcorrenciasList ocorrencias={ocorrencias} />}
      
      {!loading && !error && 
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage - 1}
        handlePageClick={(event) => {
          setCurrentPage(event.selected + 1);
        }}
      />}
    </>
  );
}

export default HomePage;
