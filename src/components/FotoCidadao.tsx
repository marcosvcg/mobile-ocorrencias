import { useEffect, useState } from "react";
import { fetchFotoCidadao } from "../service/apiSSO";
import defaultIcon from "/public/default-avatar-icon.svg"

const FotoCidadao = () => {
    const [fotoUrl, setFotoUrl] = useState<string>(defaultIcon);
    const [cidadaoPossuiFoto, setCidadaoPossuiFoto] = useState<boolean>(false);

    useEffect(() => {
        const carregarFoto = async () => {
            const foto = await fetchFotoCidadao();
            if (foto) {
                setFotoUrl(foto);
                setCidadaoPossuiFoto(true);
            }
        };
        carregarFoto();
    }, []);


    return (
        <img src={cidadaoPossuiFoto ? fotoUrl : defaultIcon} alt="Foto do Cidadão" />
    )
}

export default FotoCidadao;