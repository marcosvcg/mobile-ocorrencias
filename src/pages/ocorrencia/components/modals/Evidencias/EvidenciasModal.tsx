import type { Ocorrencia } from "../../../../../models/Ocorrencia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../../../../util/Swiper.css";
import "./css/EvidenciasModal.css";

interface Props {
  ocorrencia: Ocorrencia;
  onClose: () => void;
}

const EvidenciasModal = ({ onClose, ocorrencia }: Props) => {
  return (
    <div className="evidencias-modal-container">
      <div className="evidencias-modal">
        <div className="evidencias-modal-header">
          <span className="evidencias-titulo">Evidências</span>
          <p className="evidencias-close" onClick={() => onClose()}>
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
          <div className="evidencias-modal-content">
            {ocorrencia.arquivos_recebidos.map((evidencia, index) => (
              <>
              <SwiperSlide key={index}>
                <img className="evidencias-fotos" src={!evidencia.url ? evidencia.resposta : evidencia.url} alt={evidencia.nome} />
                {(evidencia.url?.includes(".pdf") || evidencia.resposta?.includes(".pdf")) && (
                  <a className="baixar-pdf" href={!evidencia.url ? evidencia.resposta : evidencia.url}>Baixar PDF</a>
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
