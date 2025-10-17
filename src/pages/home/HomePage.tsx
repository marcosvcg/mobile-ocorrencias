import type { SolicitacaoView } from "../../models/SolicitacaoView";
import { useEffect, useState } from "react";
import { useCidadao } from "../../util/CidadaoProvider";
import { fetchOcorrenciasPorFiltros } from "../../service/apiForms";
import { fetchObterDemandasPorFiltros } from "../../service/apiBackend";
import { filtroMap, type FiltroLabel } from "../../models/Filtros";
import { DataMapper } from "../../models/DataMapper";
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

  const obterOcorrencias = async (
    status: string = statusSelecionado,
    filtro?: FiltroLabel,
    valor?: string,
    page?: number
) => {
  try {
    setLoading(true);

    // Promise.allSettled impede que a lista de ocorrencias quebre caso alguma requisicao falhe
    //  (exemplo: se nao houver mais de 10 paginas de ocorrencias mas houverem 15 paginas de demandas,
    //   o fetch de ocorrencias falha mas o fetch de demandas nao, atualizando a lista de solicitacoes)
    const [demandas, ocorrencias] = await Promise.allSettled([
      fetchObterDemandasPorFiltros(
        orgaoSlug ? orgaoSlug : '', 
        setores, 
        status === 'Solicitado' ? 'Em Aberto' : status, 
        filtro, valor, page),
      fetchOcorrenciasPorFiltros(status, filtro, valor, page)
    ]);

    // se a requisicao falhar, retornar vazio
    const demandasRetornadas = demandas.status === 'fulfilled' ? demandas.value : { results: [], total_pages: 0 }; 
    const ocorrenciasRetornadas = ocorrencias.status === 'fulfilled' ? ocorrencias.value : { results: [], total_pages: 0 };

    // mapear os objetos das requisicoes pro ViewModel em comum (SolicitacaoView)
    const demandasMapeadas = (demandasRetornadas.results ?? []).map(DataMapper.mapDemandaAtendenteToView);
    const ocorrenciasMapeadas = (ocorrenciasRetornadas.results ?? []).map(DataMapper.mapOcorrenciaToView);

    
    const totalOcorrencias = [...demandasMapeadas, ...ocorrenciasMapeadas].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    
    const totalPaginas = Math.max(demandasRetornadas.total_pages, ocorrenciasRetornadas.total_pages);

    setPageCount(totalPaginas)
    setOcorrencias(totalOcorrencias);
  } catch (error) {
    console.error('Erro ao obter ocorrências: ', error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    obterOcorrencias(statusSelecionado, filtroMap[filtroSelecionado], busca, currentPage);
  }, [currentPage, orgaoSlug, setores]);

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
