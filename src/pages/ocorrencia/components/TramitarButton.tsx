import type { Ocorrencia } from "../../../models/Ocorrencia";
import { fetchObterTramitacoesPeloProtocoloEFlowSlug } from "../../../service/apiBackend";
import { obterTramitacaoNaoConcluida } from "../../../util/obterTramitacaoNaoConcluida";
import "./css/TramitarButton.css";

interface Props {
    ocorrencia: Ocorrencia;
}

const TramitarButton = ({ ocorrencia }: Props) => {

    async function tramitarSolicitacao() {
        if (ocorrencia) {
            const data = await fetchObterTramitacoesPeloProtocoloEFlowSlug(ocorrencia.protocolo, ocorrencia.flow.id);
            if(Array.isArray(data))
            console.log(obterTramitacaoNaoConcluida(data, ocorrencia));
    }
}

    return (
        <>
            <button
                className="tramitar-button"
                disabled={ocorrencia.status === "Concluído"}
                onClick={() => tramitarSolicitacao()}
            >
                <span>Tramitar</span>
            </button>

        </>
    );
}

export default TramitarButton;