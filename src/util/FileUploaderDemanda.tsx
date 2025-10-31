import { fetchEnviarAnexoInterno } from "../service/apiForms";
import React, { useRef, useState } from "react";
import TrashIcon from "../assets/icons/TrashIcon";
import "./FileUploader.css";

interface FileUploaderDemandaProps {
    demanda: number;
}

const FileUploaderDemanda: React.FC<FileUploaderDemandaProps> = ({ demanda }) => {
    const [files, setFiles] = useState<File[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            const fileArray = Array.from(selectedFiles);

            // Evita duplicatas
            const uniqueFiles = fileArray.filter(
                (newFile) => !files.some((f) => f.name === newFile.name && f.lastModified === newFile.lastModified)
            );

            const updatedFiles = [...files, ...uniqueFiles];
            setFiles(updatedFiles);
        }
    };

    const handleRemoveFile = (index: number) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
    };

    const handleUpload = async () => {
        setIsUploading(true);
        for (const file of files) {
            const formData = new FormData();

            formData.append("titulo", file.name);
            formData.append("demanda", demanda.toString());
            formData.append("arquivo", file);

            // realizar a requisicao p/ enviar arquivo aqui!
            //
            // await fetchEnviarAnexoInterno(identificadorSolicitacao, formData);
        }
        window.location.reload();
        setIsUploading(false);
    };

    return (
        <>
        <div className="file-container">
            <input
                type="file"
                accept=".jpg, .jpeg, .png"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
            />


            {files.length > 0 && (
                <ul className="file-list">
                    {files.map((file, index) => (
                        <li key={`${file.name}-${file.lastModified}`} className="file-item">
                            <span className="file-name" title={file.name}>{file.name}</span>
                            <div className="remove-button" onClick={() => handleRemoveFile(index)}>
                                <TrashIcon />
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className="button-container">
                <button className="send-file-button" onClick={() => fileInputRef.current?.click()}>
                    Adicionar
                </button>
            {files.length > 0 && 
            ( 
                <button className="salvar-button" onClick={handleUpload} disabled={isUploading}>
                    Salvar
                </button> 
            )}
            </div>
        </div>
        </>
    );
};

export default FileUploaderDemanda;
