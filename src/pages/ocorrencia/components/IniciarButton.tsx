import type { Ocorrencia } from "../../../models/Ocorrencia";
import { fetchAceitarDocumentoSolicitacao, fetchAlterarAtendente } from "../../../service/apiForms";
import { useState } from "react";
import { useCidadao } from "../../../util/CidadaoProvider";
import TratamentoIniciadoModal from "./modals/Iniciar/TratamentoIniciadoModal";
import IniciarModal from "./modals/Iniciar/IniciarModal";
import "./css/IniciarButton.css";

interface Props {
  ocorrencia: Ocorrencia;
}

const IniciarButton = ({ ocorrencia }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tratamentoIniciadoModalOpen, setTratamentoIniciadoModelOpen] = useState(false);
  const { dadosCidadao } = useCidadao();

  async function iniciarTratamento() {

    if (!dadosCidadao || !Array.isArray(dadosCidadao)) return null;
    
    else {
      setModalOpen(false);
      setTratamentoIniciadoModelOpen(true);

      await fetchAlterarAtendente(
        ocorrencia.id,
        dadosCidadao[0].cpf
      );

      const documento = ocorrencia.documentos_solicitacao?.[0];
      if (documento && !documento.verificado_em) {
        fetchAceitarDocumentoSolicitacao(
          documento.id,
          ocorrencia.identificador
        );
      };

      setInterval(() => {
        window.location.reload();
      }, 1000);
    };
  }

  return (
    <>
      <button
        className="iniciar-button"
        disabled={ocorrencia.status === "Concluído"}
        onClick={() => setModalOpen(true)}
      >
        <span>Iniciar</span>
      </button>

      {modalOpen && <IniciarModal onNao={() => setModalOpen(false)} onSim={() => iniciarTratamento()} />}
      {tratamentoIniciadoModalOpen && <TratamentoIniciadoModal onClose={() => setTratamentoIniciadoModelOpen(false)} />}
    </>
  );
};

export default IniciarButton;