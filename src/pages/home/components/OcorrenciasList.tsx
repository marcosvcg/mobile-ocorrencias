import { useEffect, useState } from "react";
import { fetchOcorrencias } from "../../../service/apiForms";
import type { Ocorrencia } from "../../../models/Ocorrencia";
import OcorrenciaCard from "./OcorrenciaCard";

const OcorrenciasList = () => {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOcorrencias()
      .then(setOcorrencias)
      .catch(() => setError("Erro ao carregar"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

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