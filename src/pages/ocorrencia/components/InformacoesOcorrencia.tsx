import type { Ocorrencia } from "../../../models/Ocorrencia";
import { formatarCPF } from "../../../util/formatarCPF";
import "./css/InformacoesOcorrencia.css";

type InformacoesOcorrenciaProps = Pick<Ocorrencia, 'cpf'| 'nome' |'protocolo' | 'flow'>;

const InformacoesOcorrencia = ({
    cpf, nome, protocolo, flow
}: InformacoesOcorrenciaProps) => {

  return (
    <div className="informacoes-ocorrencia">
      <h3>Identificação:</h3>

      <p><strong>Requerente:</strong> {nome}</p>
      <p><strong>CPF:</strong> {formatarCPF(cpf)}</p>
      <p><strong>Protocolo:</strong> {protocolo}</p>
      <p><strong>Fluxo:</strong> {flow.titulo}</p>
    </div>
  );
};

export default InformacoesOcorrencia;