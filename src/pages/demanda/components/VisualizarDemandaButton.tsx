import type { AtendenteDemanda } from "../../../models/AtendenteDemanda";
import ScrollTextIcon from "../../../assets/icons/ScrollTextIcon";
import "./css/VisualizarDemandaButton.css";

interface Props {
  demanda: AtendenteDemanda;
}

const VisualizarDemandaButton = ({ demanda }: Props) => {
  const endereco = `${demanda.endereco.logradouro}, ${demanda.endereco.bairro}, ${demanda.endereco.numero} - ${demanda.endereco.cidade} - ${demanda.endereco.estado} - CEP: ${demanda.endereco.cep}`;

  return (
    <>
      <button
        className="visualizar-demanda-button"
        onClick={() => alert(`
          Conteúdo da Demanda: ${demanda.conteudo}
          Endereço: ${endereco}
          `)}
      >
        <span>Visualizar{"\n"}Demanda</span> <ScrollTextIcon />
      </button>
    </>
  );
};

export default VisualizarDemandaButton;