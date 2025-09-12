import "./css/OcorrenciaCard.css";
import type { Ocorrencia } from "../../../models/Ocorrencia";
import { formatarCPF } from "../../../util/formatarCPF";
import { useNavigate } from "react-router-dom";

type OcorrenciaCardProps = Pick<Ocorrencia, 'identificador' | 'cpf' | 'status' | 'protocolo' | 'created_at' | 'servico_titulo'>;

const OcorrenciaCard = ({
    identificador, cpf, status, protocolo, created_at, servico_titulo
}: OcorrenciaCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ocorrencia/${identificador}`);
  }

  const statusClass = status.replaceAll(' ', '');
  const isStatusCancelado = status.toLowerCase().includes('cancelado');

  return (
    <div className={`ocorrencia-card-${isStatusCancelado ? 'Cancelado' : statusClass}`} onClick={handleClick}>
      <p><strong>Serviço:</strong> {servico_titulo}</p>
      <p><strong>Requerente:</strong> {formatarCPF(cpf)}</p>
      <p><strong>Protocolo:</strong> {protocolo}</p>
      <p><strong>Data/abertura:</strong> {new Date(created_at).toLocaleString()}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
};

export default OcorrenciaCard;