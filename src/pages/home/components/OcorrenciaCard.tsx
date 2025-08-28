import "./css/OcorrenciaCard.css";
import type { Ocorrencia } from "../../../models/Ocorrencia";
import { formatarCPF } from "../../../util/formatarCPF";

type OcorrenciaCardProps = Pick<Ocorrencia, 'cpf' | 'status' | 'protocolo' | 'created_at' | 'flow'>;

const OcorrenciaCard = ({
    cpf, status, protocolo, created_at, flow
}: OcorrenciaCardProps) => {
  return (
    <div className="ocorrencia-card">
      <p><strong>Solicitado por:</strong> {formatarCPF(cpf)}</p>
      <p><strong>Situação:</strong> {status}</p>
      <p><strong>Protocolo:</strong> {protocolo}</p>
      <p><strong>Solicitado em:</strong> {new Date(created_at).toLocaleString()}</p>
      <p><strong>Serviço:</strong> {flow.titulo}</p>
    </div>
  );
};

export default OcorrenciaCard;