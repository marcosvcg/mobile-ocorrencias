import type { AtendenteDemanda } from "../../../models/AtendenteDemanda";
import "./css/ExecutarButton.css";

interface Props {
  demanda: AtendenteDemanda;
}

const ExecutarButton = ({ demanda }: Props) => {
  const status = demanda.historico.at(-1)?.status;

  return (
    <>
      <button className="executar-button"
        disabled={ status === "Concluído" || status === "Arquivado" }
        onClick={() => alert('clicado!')}
      >
        <span>Executar</span>
      </button>
    </>
  );
};

export default ExecutarButton;
