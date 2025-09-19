import type { Ocorrencia } from "../../../models/Ocorrencia";
import { fetchAceitarDocumentoSolicitacao, fetchAlterarAtendente } from "../../../service/apiForms";
import { useState } from "react";
import { useCidadao } from "../../../util/CidadaoProvider";
import TratamentoModal from "./modals/Tratamento/TratamentoModal";
import "./css/TratamentoButton.css";
import TratamentoIniciadoModal from "./modals/Tratamento/TratamentoIniciadoModal";

interface Props {
  ocorrencia: Ocorrencia;
}

const TratamentoButton = ({ ocorrencia }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tratamentoIniciadoModalOpen, setTratamentoIniciadoModelOpen] = useState(false);
  const { dadosCidadao } = useCidadao();

  function iniciarTratamento() {

    if (!dadosCidadao || !Array.isArray(dadosCidadao)) {
      return null;

    }
    else {
      fetchAlterarAtendente(
        ocorrencia.id,
        dadosCidadao[0].cpf
      );

      if (!ocorrencia.documentos_solicitacao[0].verificado_em) {
        fetchAceitarDocumentoSolicitacao(
          ocorrencia.documentos_solicitacao[0].id,
          ocorrencia.identificador
        );
      };

      setModalOpen(false);
      setTratamentoIniciadoModelOpen(true);
      setInterval(() => {
        window.location.reload();
      }, 1000);
    };
  }


  return (
    <>
      <button
        className="tratamento-button"
        disabled={ocorrencia.status === "Concluído"}
        onClick={() => setModalOpen(true)}
      >
        <span>Tratamento</span>
      </button>

      {modalOpen && <TratamentoModal onNao={() => setModalOpen(false)} onSim={() => iniciarTratamento()} />}
      {tratamentoIniciadoModalOpen && <TratamentoIniciadoModal onClose={() => setTratamentoIniciadoModelOpen(false)} />}
    </>
  );
};

export default TratamentoButton;