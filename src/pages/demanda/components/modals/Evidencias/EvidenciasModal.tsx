import type { AtendenteDemanda } from "../../../../../models/AtendenteDemanda";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../../../../util/Swiper.css";
import "./css/EvidenciasModal.css";

interface Props {
  demanda: AtendenteDemanda;
  onClose: () => void;
}

const EvidenciasModal = ({ onClose, demanda }: Props) => {
  return (
    <div className="evidencias-demandas-modal-container">
      <div className="evidencias-demandas-modal">
        <div className="evidencias-demandas-modal-header">
          <span className="evidencias-demandas-titulo">Evidências</span>
          <p className="evidencias-demandas-close" onClick={() => onClose()}>
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
          <div className="evidencias-demandas-modal-content">
            {demanda.evidencias && demanda.evidencias.map((evidencia, index) => (
              <>
              <SwiperSlide key={index}>
                <img className="evidencias-demandas-fotos" src={import.meta.env.VITE_API_OUVIDORIA + evidencia.arquivo} alt={evidencia.titulo} />
                {(evidencia.arquivo.includes(".pdf")) && (
                  <a className="baixar-pdf" href={import.meta.env.VITE_API_OUVIDORIA + evidencia.arquivo}>Baixar PDF</a>
                )}
              </SwiperSlide>
              <div className="swiper-pagination"></div>
              </>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default EvidenciasModal;
