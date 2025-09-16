import type { Ocorrencia } from "../../../../../models/Ocorrencia";
import { fetchObterConteudoDocumentoPeloID } from "../../../../../service/apiBackend";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import DOMPurify from "dompurify";
import "./css/VisualizarOcorrenciaModal.css";

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
            if(data) setDocumentoSolicitacao(DOMPurify.sanitize(data[0]));
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
          <span className="visualizar-ocorrencia-titulo">Detalhes da Ocorrência</span>
          <p className="visualizar-ocorrencia-close" onClick={() => onClose()}>&times;</p>
        </div>
          <div className="visualizar-ocorrencia-modal-content">
            <div className="visualizar-ocorrencia-documento" dangerouslySetInnerHTML={{ __html: documentoSolicitacao }} onClick={handlePrint}/>
        </div>
      </div>

      <div style={{ display: "none" }}>
          <Editor
          tinymceScriptSrc={"/tinymce/tinymce.min.js"}
            onInit={(_, editor) => (editorRef.current = editor)}
            value={documentoSolicitacao}
            init={{
              menubar: false,
              toolbar: false,
              plugins: "print",
              readOnly: true,
              branding: false,
              statusbar: false,
              height: 0,
            }}
          />
        </div>
    </div>
  );
};

export default VisualizarOcorrenciaModal;
