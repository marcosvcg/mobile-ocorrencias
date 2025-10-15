import type { SolicitacaoView } from "../../../models/SolicitacaoView";
import { formatarCPF } from "../../../util/formatarCPF";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCidadao } from "../../../util/CidadaoProvider";
import PossuiAtendenteModal from "./modals/PossuiAtendenteModal";
import "./css/OcorrenciaCard.css";

type OcorrenciaCardProps = Pick<SolicitacaoView, 'identificador' | 'cpf' | 'status' | 'protocolo' | 'created_at' | 'servico_titulo' | 'atendente' | 'tipo'>;

const OcorrenciaCard = ({
    identificador, cpf, status, protocolo, created_at, servico_titulo, atendente, tipo
}: OcorrenciaCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { dadosCidadao } = useCidadao();
  const navigate = useNavigate();

  const handleNavigate = () => { 
    if (tipo === "Solicitação Digital") navigate(`/ocorrencia-digital/${identificador}`);
    if (tipo === "Solicitação/Serviço") navigate(`/ocorrencia/${protocolo}`);
  }

  const handleClick = () => {
    if (!dadosCidadao || !Array.isArray(dadosCidadao)) return null;
    if(atendente && dadosCidadao[0].cpf !== atendente.username) {
      setModalOpen(true);
    } else {
      handleNavigate();
    }
  }

  const statusClass = status.replaceAll(' ', '');
  const isStatusCancelado = status.toLowerCase().includes('cancelado');

  return (
    <>
    {modalOpen && 
    <PossuiAtendenteModal 
      onNao={() => setModalOpen(false)} 
      onSim={() => handleNavigate()} 
      atendente={atendente} 
    />}
      <div className="ocorrencia-card" onClick={handleClick}>
        <p><strong>Serviço:</strong> {servico_titulo}</p>
        <p><strong>Requerente:</strong> {formatarCPF(cpf === null ? 'Não consta' : cpf)}</p>
        <p><strong>Protocolo:</strong> {protocolo}</p>
        <p><strong>Data/abertura:</strong> {new Date(created_at).toLocaleString()}</p>
        <p><strong>Tipo:</strong> 
          <strong 
            style={tipo === "Solicitação Digital"
              ? { color: "#0084ffff"}
              : { color: "#163270ff"}}> {tipo}
          </strong>
        </p>
        <p className={`ocorrencia-card-status-${isStatusCancelado ? 'Cancelado' : statusClass}`}>
          <strong>Status:</strong> {status}
        </p>
      </div>
    </>
  );
};

export default OcorrenciaCard;