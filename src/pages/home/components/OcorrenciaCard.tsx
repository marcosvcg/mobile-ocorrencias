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

  return (
    <div className="ocorrencia-card" onClick={handleClick}>
      <p><strong>Solicitado por:</strong> {formatarCPF(cpf)}</p>
      <p><strong>Situação:</strong> {status}</p>
      <p><strong>Protocolo:</strong> {protocolo}</p>
      <p><strong>Solicitado em:</strong> {new Date(created_at).toLocaleString()}</p>
      <p><strong>Serviço:</strong> {servico_titulo}</p>
    </div>
  );
};

export default OcorrenciaCard;