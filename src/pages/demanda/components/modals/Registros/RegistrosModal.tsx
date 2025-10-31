import type { AtendenteDemanda } from "../../../../../models/AtendenteDemanda";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../../../../util/Swiper.css";
import "./css/RegistrosModal.css";

interface Props {
  demanda: AtendenteDemanda;
  onClose: () => void;
  onEnviarFotos: () => void;
}

const RegistrosModal = ({ demanda, onClose, onEnviarFotos }: Props) => {

  return (
    <>
      <div className="registros-modal-container">
        <div className="registros-modal">
          <div className="registros-modal-header">
            <span className="registros-titulo">Registros Internos</span>
            <p className="registros-close" onClick={() => onClose()}>
              &times;
            </p>
          </div>
          <Swiper
            modules={[Pagination]}
            grabCursor
            initialSlide={0}
            centeredSlides
            slidesPerView="auto"
            speed={500}
            slideToClickedSlide
            autoHeight={true}
            pagination={{ clickable: true }}
          >
            <div className="registros-modal-content">
              {demanda.registros.at(0) === undefined // validar essa logica depois!
                ? <span className="registros-nenhum-registro">Nenhum registro enviado.</span>
                : demanda.registros.map((registro, index) => (
                  <>
                    <SwiperSlide key={index}>
                      <img className="registros-fotos" src={import.meta.env.VITE_API_OUVIDORIA + registro.arquivo} alt={registro.titulo} />
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                  </>
                ))}
            </div>
          </Swiper>
        </div>
        <div className="registros-enviar-fotos-div">
          {demanda.status !== "Concluído" && (
            <button className="registros-button-enviar-fotos"
              onClick={onEnviarFotos}
            >Enviar Fotos
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default RegistrosModal;
