import type { Ocorrencia } from "../../../../../models/Ocorrencia";
import { fetchObterConteudoDocumentoPeloID } from "../../../../../service/apiBackend";
import { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";
import ImprimirPDF from "../../../../../util/ImprimirPDF";
import "./css/VisualizarOcorrenciaModal.css";
import PrinterIcon from "../../icons/PrinterIcon";

interface Props {
  ocorrencia: Ocorrencia;
  onClose: () => void;
}

const VisualizarOcorrenciaModal = ({ onClose, ocorrencia }: Props) => {
  const [documentoSolicitacao, setDocumentoSolicitacao] = useState("");
  const editorRef = useRef<any>(null);

  useEffect(() => {
    const carregarDocumentoSolicitacao = async () => {
      const data = await fetchObterConteudoDocumentoPeloID(ocorrencia.documentos_solicitacao[0].id);
      if (data) setDocumentoSolicitacao(DOMPurify.sanitize(data[0]));
    };
    carregarDocumentoSolicitacao();
  }, []);

  const handlePrint = () => {
    if (editorRef.current) {
      editorRef.current.execCommand("mcePrint");
    }
  };

  return (
    <div className="visualizar-ocorrencia-modal-container">
      <div className="visualizar-ocorrencia-modal">
        <div className="visualizar-ocorrencia-modal-header">
          <div onClick={handlePrint}><PrinterIcon /></div>
          <span className="visualizar-ocorrencia-titulo">Detalhes da Ocorrência</span>
          <p className="visualizar-ocorrencia-close" onClick={() => onClose()}>&times;</p>
        </div>
        <div className="visualizar-ocorrencia-modal-content">
          <div className="visualizar-ocorrencia-documento" dangerouslySetInnerHTML={{ __html: documentoSolicitacao }} />
        </div>
      </div>
      <ImprimirPDF editorRef={editorRef} documentoSolicitacao={documentoSolicitacao} />
    </div>
  );
};

export default VisualizarOcorrenciaModal;
