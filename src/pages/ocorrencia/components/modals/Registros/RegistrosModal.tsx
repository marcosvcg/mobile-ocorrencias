import type { Ocorrencia } from "../../../../../models/Ocorrencia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../../../../util/Swiper.css";
import "./css/RegistrosModal.css";

interface Props {
  ocorrencia: Ocorrencia;
  onClose: () => void;
  onEnviarFotos: () => void;
}

const RegistrosModal = ({ ocorrencia, onClose, onEnviarFotos }: Props) => {

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
              {ocorrencia.anexos_internos.length === 0
                ? <span className="registros-nenhum-registro">Nenhum registro enviado.</span>
                : ocorrencia.anexos_internos.map((registro, index) => (
                  <>
                    <SwiperSlide key={index}>
                      <img className="registros-fotos" src={registro.arquivo} alt={registro.assunto} />
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                  </>
                ))}
            </div>
          </Swiper>
        </div>
        <div className="registros-enviar-fotos-div">
          {ocorrencia.status !== "Concluído" && (
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
