import type { Ocorrencia } from "../../../models/Ocorrencia";
import type { Tramitacoes } from "../../../models/Tramitacoes";
import { useEffect, useState } from "react";
import { fetchObterTramitacoesPeloProtocoloEFlowSlug } from "../../../service/apiBackend";
import { obterTramitacaoNaoConcluida } from "../../../util/obterTramitacaoNaoConcluida";
import RegistrosModal from "./modals/Registros/RegistrosModal";
import EnviarFotosModal from "./modals/Registros/EnviarFotosModal";
import CameraIcon from "./icons/CameraIcon";
import "./css/RegistrosButton.css";

interface Props {
  ocorrencia: Ocorrencia;
  tramitacao: Tramitacoes;
}

const RegistrosButton = ({ ocorrencia, tramitacao }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [enviarFotosModalOpen, setEnviarFotosModalOpen] = useState(false);

  return (
    <>
      <button
        className="registros-button"
        disabled={
          ocorrencia.atendente === null &&
          !ocorrencia.documentos_solicitacao[0]?.verificado_em
        }
        onClick={() => setModalOpen(true)}
      >
        <span>Registros</span> <CameraIcon />
      </button>

      {modalOpen && (
        <RegistrosModal
        ocorrencia={ocorrencia}
        onClose={() => setModalOpen(false)}
        onEnviarFotos={() => {
          setModalOpen(false)
          setEnviarFotosModalOpen(true)
        }}/>
      )}

      {enviarFotosModalOpen && tramitacao && (
        <EnviarFotosModal 
        onClose={() => {setEnviarFotosModalOpen(false)}}
        identificadorSolicitacao={ocorrencia.identificador}
        assunto={tramitacao.atividade}
        descricao={tramitacao.descricao}
        solicitacao={ocorrencia.id}
        />
      )}
    </>
  );
};

export default RegistrosButton;
