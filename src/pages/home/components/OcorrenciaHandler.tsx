import "./css/OcorrenciaHandler.css"

interface Props {
    texto: string;
}

const OcorrenciaHandler = ({ texto }: Props) => {
    return (
        <div className="ocorrencia-handler">
            <p>{texto}</p>
        </div>
    );
};

export default OcorrenciaHandler;