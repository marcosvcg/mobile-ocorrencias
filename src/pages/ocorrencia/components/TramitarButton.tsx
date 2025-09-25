import type { Tramitacoes } from "../../../models/Tramitacoes";
import type { Ocorrencia } from "../../../models/Ocorrencia";
import { useEffect, useState } from "react";
import { fetchObterTramitacoesPeloProtocoloEFlowSlug } from "../../../service/apiBackend";
import { fetchConfirmarTramitacaoSemAssinatura, fetchTramitarSolicitacao } from "../../../service/apiForms";
import { obterTramitacaoNaoConcluida } from "../../../util/obterTramitacaoNaoConcluida";
import { useCidadao } from "../../../util/CidadaoProvider";
import TramitarModal from "./modals/Tramitar/TramitarModal";
import "./css/TramitarButton.css";
import CarregandoModal from "./modals/Tramitar/CarregandoModal";

interface Props {
  ocorrencia: Ocorrencia;
  tramitacao: Tramitacoes;
}

const TramitarButton = ({ ocorrencia, tramitacao }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [carregandoModalOpen, setCarregandoModalOpen] = useState(false);
  const { dadosCidadao } = useCidadao();

  async function tramitarSolicitacao() {
    if (tramitacao) {
      setCarregandoModalOpen(true);
      const identificadorTramitacao = await fetchTramitarSolicitacao(
        tramitacao.descricao,
        ocorrencia.identificador,
        tramitacao.orgao_id,
        tramitacao.status,
        tramitacao.tramitacao_id
      );

      if (identificadorTramitacao && Array.isArray(dadosCidadao)) {
        await fetchConfirmarTramitacaoSemAssinatura(
          dadosCidadao[0].cpf,
          identificadorTramitacao.identificador,
          ocorrencia.identificador,
          "Tramitacao"
        );
      }
    }

    setInterval(() => {
      window.location.reload();
    }, 500);
  }

  return (
    <>
      <button
        className="tramitar-button"
        disabled={
            ocorrencia.status === "Concluído" ||
            ocorrencia.status.includes("Cancelado")
        }
        onClick={() => setModalOpen(true)}
      >
        <span>Executar</span>
      </button>

      {modalOpen && tramitacao && (
        <TramitarModal
          etapa={`${tramitacao.ordem}ª - ${tramitacao.atividade}`}
          status={`${tramitacao.status}`}
          onCancelar={() => setModalOpen(false)}
          onSalvar={() => tramitarSolicitacao()}
        />
      )}
      {carregandoModalOpen && <CarregandoModal />}
    </>
  );
};

export default TramitarButton;
