import type { Ocorrencia } from "../../../models/Ocorrencia";
import { fetchObterTramitacoesPeloProtocoloEFlowSlug } from "../../../service/apiBackend";
import { fetchConfirmarTramitacaoSemAssinatura, fetchTramitarSolicitacao } from "../../../service/apiForms";
import { useCidadao } from "../../../util/CidadaoProvider";
import { obterTramitacaoNaoConcluida } from "../../../util/obterTramitacaoNaoConcluida";
import "./css/TramitarButton.css";

interface Props {
    ocorrencia: Ocorrencia;
}

const TramitarButton = ({ ocorrencia }: Props) => {
    const { dadosCidadao } = useCidadao();

    // Falta implementar um modal para o usuário ver os detalhes da tramitação!!!
    //
    // - O usuário só deverá confirmar a tramitação quando ver o modal com:
    // -- Etapa / Órgão
    // -- Status
    //
    // ---> pensar também na possibilidade de "Restitur" ou "Cancelar" a solicitação 
    async function tramitarSolicitacao() {

        if (ocorrencia && Array.isArray(dadosCidadao)) {
            let identificadorTramitacao;
            const data = await fetchObterTramitacoesPeloProtocoloEFlowSlug(ocorrencia.protocolo, ocorrencia.flow.id);
            
            if (data && Array.isArray(data)) {
                const tramitacao = obterTramitacaoNaoConcluida(data, ocorrencia)
                
                if (tramitacao) {
                    identificadorTramitacao = await fetchTramitarSolicitacao(
                        'teste botao tramitar',
                        ocorrencia.identificador,
                        tramitacao.orgao_id,
                        tramitacao.status,
                        tramitacao.tramitacao_id,
                    );
                };
            }
            
            if (identificadorTramitacao) {
                await fetchConfirmarTramitacaoSemAssinatura(
                    dadosCidadao[0].cpf,
                    identificadorTramitacao.identificador,
                    ocorrencia.identificador,
                    "Tramitacao",
                );
            };
            
            setInterval(() => {
                window.location.reload();
            }, 500);
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