import Spinner from "../../../../../components/Spinner";
import "./css/CarregandoModal.css";

const CarregandoModal = () => {
  return (
    <div className="carregando-modal-container">
      <div className="carregando-modal">
        <div className="carregando-modal-content">
            <span className="carregando-texto">Carregando...</span>
            <Spinner />
            </div>
        </div>
    </div>
  );
};

export default CarregandoModal;
