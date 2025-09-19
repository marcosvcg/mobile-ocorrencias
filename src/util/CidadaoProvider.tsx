import { createContext, useContext, useEffect, useState } from "react";
import { fetchDadosCidadao, fetchFotoCidadao } from "../service/apiSSO";

type CidadaoContextType = {
    dadosCidadao: {
        nome: string;
        cpf: string;
    } | null;
    fotoUrl: string | null;
    cidadaoPossuiFoto: boolean;
};

const CidadaoContext = createContext<CidadaoContextType>({
    dadosCidadao: null,
    fotoUrl: null,
    cidadaoPossuiFoto: false
});

export const CidadaoProvider = ({ children }: { children: React.ReactNode }) => {
    const defaultIcon = '/default-avatar-icon.svg';
    const [dadosCidadao, setDadosCidadao] = useState<any>(null);
    const [fotoUrl, setFotoUrl] = useState<string>(defaultIcon);
    const [cidadaoPossuiFoto, setCidadaoPossuiFoto] = useState<boolean>(false);

    useEffect(() => {
        const carregarDadosCidadao = async () => {
            const data = await fetchDadosCidadao();
            if (data) setDadosCidadao(data);
            const foto = await fetchFotoCidadao();
            if (foto) {
                setFotoUrl(foto);
                setCidadaoPossuiFoto(true);
            }
        };
        carregarDadosCidadao();
    }, []);

    return (
        <CidadaoContext.Provider value={{ dadosCidadao, fotoUrl, cidadaoPossuiFoto }}>
            {children}
        </CidadaoContext.Provider>
    );
};

export const useCidadao = () => useContext(CidadaoContext);