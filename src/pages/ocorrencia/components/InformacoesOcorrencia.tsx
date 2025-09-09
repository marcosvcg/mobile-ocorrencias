import type { Ocorrencia } from "../../../models/Ocorrencia";
import { formatarCPF } from "../../../util/formatarCPF";
import "./css/InformacoesOcorrencia.css";

type InformacoesOcorrenciaProps = Pick<Ocorrencia, 'cpf'| 'protocolo' | 'identificador' | 'flow'>;

const InformacoesOcorrencia = ({
    cpf, protocolo, identificador, flow
}: InformacoesOcorrenciaProps) => {

  return (
    <div className="informacoes-ocorrencia">
      <h3>Informações do Fluxo</h3>

      <p><strong>CPF:</strong> {formatarCPF(cpf)}</p>
      <p><strong>Protocolo:</strong> {protocolo}</p>
      <p className="identificador"><strong>Identificador:</strong> {identificador}</p>
      <p><strong>Fluxo:</strong> {flow.titulo}</p>
    </div>
  );
};

export default InformacoesOcorrencia;