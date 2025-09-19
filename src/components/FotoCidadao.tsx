import { useCidadao } from "../util/CidadaoProvider";

const FotoCidadao = () => {
    const { fotoUrl, cidadaoPossuiFoto } = useCidadao();
    const defaultIcon = "/default-avatar-icon.svg";

    return (
        <img src={cidadaoPossuiFoto ? fotoUrl || defaultIcon : defaultIcon} alt="Foto do Cidadão" />
    );
};

export default FotoCidadao;