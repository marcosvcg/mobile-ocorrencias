import { useEffect, useState } from "react";
import { useCidadao } from "../../util/CidadaoProvider";
import type { SolicitacaoView } from "../../models/SolicitacaoView";
import { fetchOcorrenciasPorFiltros } from "../../service/apiForms";
import { filtroMap, type FiltroLabel } from "../../models/Filtros";
import OcorrenciasList from "./components/OcorrenciasList";
import NavBar from "../../components/NavBar";
import FilterDiv from "./components/FilterDiv";
import Pagination from "./components/Pagination";
import Spinner from "../../components/Spinner";

function HomePage() {
  const { orgaoSlug, setores } = useCidadao();

  const [ocorrencias, setOcorrencias] = useState<SolicitacaoView[]>([]);
  const [loading, setLoading] = useState(true);
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

    fetchOcorrenciasPorFiltros(status, filtro, valor, page)
      .then(({ results, total_pages }) => {
        setOcorrencias(results);
        setPageCount(total_pages);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    obterOcorrencias(statusSelecionado, filtroMap[filtroSelecionado], busca, currentPage);
  }, [currentPage, orgaoSlug]);

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

      {!loading && 
      <OcorrenciasList ocorrencias={ocorrencias} />}
      
      {!loading && ocorrencias.length > 0 &&
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
