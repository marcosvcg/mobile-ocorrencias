import type { SolicitacaoView } from "../../../models/SolicitacaoView";
import { formatarCPF } from "../../../util/formatarCPF";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCidadao } from "../../../util/CidadaoProvider";
import PossuiAtendenteModal from "./modals/PossuiAtendenteModal";
import "./css/OcorrenciaCard.css";

type OcorrenciaCardProps = Pick<SolicitacaoView, 'identificador' | 'cpf' | 'status' | 'protocolo' | 'created_at' | 'servico_titulo' | 'atendente'>;

const OcorrenciaCard = ({
    identificador, cpf, status, protocolo, created_at, servico_titulo, atendente
}: OcorrenciaCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { dadosCidadao } = useCidadao();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!dadosCidadao || !Array.isArray(dadosCidadao)) return null;
    if(atendente && dadosCidadao[0].cpf !== atendente.username) {
      setModalOpen(true);
    } else {
      navigate(`/ocorrencia-digital/${identificador}`);
    }
  }

  const statusClass = status.replaceAll(' ', '');
  const isStatusCancelado = status.toLowerCase().includes('cancelado');

  return (
    <>
    {modalOpen && 
    <PossuiAtendenteModal 
      onNao={() => setModalOpen(false)} 
      onSim={() => navigate(`/ocorrencia-digital/${identificador}`)} 
      atendente={atendente} 
    />}
      <div className={`ocorrencia-card-${isStatusCancelado ? 'Cancelado' : statusClass}`} onClick={handleClick}>
        <p><strong>Serviço:</strong> {servico_titulo}</p>
        <p><strong>Requerente:</strong> {formatarCPF(cpf)}</p>
        <p><strong>Protocolo:</strong> {protocolo}</p>
        <p><strong>Data/abertura:</strong> {new Date(created_at).toLocaleString()}</p>
        <p><strong>Status:</strong> {status}</p>
      </div>
    </>
  );
};

export default OcorrenciaCard;