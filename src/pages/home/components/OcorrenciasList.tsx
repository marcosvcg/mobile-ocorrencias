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
          cpf={ocorrencia.cpf}
          status={ocorrencia.status}
          protocolo={ocorrencia.protocolo}
          created_at={ocorrencia.created_at}
          flow={ocorrencia.flow}
        />
      ))}
    </div>
  );
};

export default OcorrenciasList;