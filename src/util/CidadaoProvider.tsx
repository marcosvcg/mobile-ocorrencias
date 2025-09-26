import { createContext, useContext, useEffect, useState } from "react";
import { fetchDadosCidadao, fetchFotoCidadao } from "../service/apiSSO";
import { useAuth } from "./AuthProvider";

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
    const { isAuthenticated } = useAuth();
    const [dadosCidadao, setDadosCidadao] = useState<any>(null);
    const [fotoUrl, setFotoUrl] = useState<string>(defaultIcon);
    const [cidadaoPossuiFoto, setCidadaoPossuiFoto] = useState<boolean>(false);

    useEffect(() => {
        const carregarDadosCidadao = async () => {
            if (isAuthenticated && !dadosCidadao) {
                const data = await fetchDadosCidadao();
                let foto = null;

                if (data) setDadosCidadao(data);
                
                if (!fotoUrl) foto = await fetchFotoCidadao();

                if (foto) {
                    setFotoUrl(foto);
                    setCidadaoPossuiFoto(true);
                };
            };
        };
        carregarDadosCidadao();
    }, [isAuthenticated]);

    return (
        <CidadaoContext.Provider value={{ dadosCidadao, fotoUrl, cidadaoPossuiFoto }}>
            {children}
        </CidadaoContext.Provider>
    );
};

export const useCidadao = () => useContext(CidadaoContext);