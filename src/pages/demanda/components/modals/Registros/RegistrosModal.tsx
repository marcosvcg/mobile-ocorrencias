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
      <div className="registros-demanda-modal-container">
        <div className="registros-demanda-modal">
          <div className="registros-demanda-modal-header">
            <span className="registros-demanda-titulo">Registros Internos</span>
            <p className="registros-demanda-close" onClick={() => onClose()}>
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
            <div className="registros-demanda-modal-content">
              {demanda.registros.at(0) === undefined // validar essa logica depois!
                ? <span className="registros-demanda-nenhum-registro">Nenhum registro enviado.</span>
                : demanda.registros.map((registro, index) => (
                  <>
                    <SwiperSlide key={index}>
                      <img className="registros-demanda-fotos" src={import.meta.env.VITE_API_OUVIDORIA + registro.arquivo} alt={registro.titulo} />
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                  </>
                ))}
            </div>
          </Swiper>
        </div>
        <div className="registros-demanda-enviar-fotos-div">
          {demanda.status !== "Concluído" && (
            <button className="registros-demanda-button-enviar-fotos"
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
