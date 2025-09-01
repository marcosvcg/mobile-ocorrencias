import { useEffect, useState } from "react";
import { fetchFotoCidadao } from "../service/apiSSO";

const FotoCidadao = () => {
    const defaultIcon = '/default-avatar-icon.svg';
    
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