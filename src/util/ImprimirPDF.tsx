import { Editor } from "@tinymce/tinymce-react";
import "./ImprimirPDF.css";

interface Props {
    editorRef: React.RefObject<any>;
    documentoSolicitacao: string;
}

const ImprimirPDF = ({ editorRef, documentoSolicitacao }: Props) => {
    return (
        <div className="imprimir-pdf">
            <Editor
                tinymceScriptSrc={"/tinymce/tinymce.min.js"}
                onInit={(_, editor) => (editorRef.current = editor)}
                value={documentoSolicitacao}
                init={{
                    licenseKey: "gpl",
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
    );
};

export default ImprimirPDF