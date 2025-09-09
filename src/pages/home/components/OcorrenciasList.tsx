import type { Ocorrencia } from "../../../models/Ocorrencia";
import OcorrenciaCard from "./OcorrenciaCard";
import OcorrenciaHandler from "./OcorrenciaHandler";
import "./css/OcorrenciasList.css";

type Props = {
  ocorrencias: Ocorrencia[];
};

const OcorrenciasList = ({ ocorrencias }: Props) => {
  if (!ocorrencias.length) return <OcorrenciaHandler texto="Nenhuma ocorrência encontrada."/>;

  return (
    <div className="ocorrencias-list">
      {ocorrencias.map((ocorrencia) => (
        <OcorrenciaCard
          key={ocorrencia.identificador}
          identificador={ocorrencia.identificador}
          cpf={ocorrencia.cpf}
          status={ocorrencia.status}
          protocolo={ocorrencia.protocolo}
          created_at={ocorrencia.created_at}
          servico_titulo={ocorrencia.servico_titulo}
        />
      ))}
    </div>
  );
};

export default OcorrenciasList;