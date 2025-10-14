import { createContext, useContext, useEffect, useState } from "react";
import { fetchDadosCidadao, fetchFotoCidadao } from "../service/apiSSO";
import { useAuth } from "./AuthProvider";
import { fetchPermissoesCidadao } from "../service/apiForms";

type CidadaoContextType = {
  dadosCidadao: {
    nome: string;
    cpf: string;
  } | null;
  fotoUrl: string | null;
  cidadaoPossuiFoto: boolean;
  orgaoSlug: string;
  setores: string[] | [];
};

const CidadaoContext = createContext<CidadaoContextType>({
  dadosCidadao: null,
  fotoUrl: null,
  cidadaoPossuiFoto: false,
  orgaoSlug: "",
  setores: [],
});

export const CidadaoProvider = ({ children }: { children: React.ReactNode; }) => {
  const defaultIcon = "/default-avatar-icon.svg";
  const { isAuthenticated } = useAuth();

  const [orgaoSlug, setOrgaoSlug] = useState<string>("");
  const [setores, setSetores] = useState<string[]>([]);

  const [dadosCidadao, setDadosCidadao] = useState<any>(null);
  const [fotoUrl, setFotoUrl] = useState<string>(defaultIcon);
  const [cidadaoPossuiFoto, setCidadaoPossuiFoto] = useState<boolean>(false);

  useEffect(() => {
    const carregarDadosCidadao = async () => {
      if (isAuthenticated && !dadosCidadao) {

        const permissoes = await fetchPermissoesCidadao();
        if (permissoes) {
          setOrgaoSlug(permissoes.orgao_slug);

          if (Array.isArray(permissoes.setores)) {
            const siglas = permissoes.setores.map(
              (setor: {
                setor_id: string;
                setor_sigla: string;
                setor_nome: string;
              }) => setor.setor_sigla
            ).filter(Boolean);
            setSetores(siglas)
          }
        }

        const data = await fetchDadosCidadao();
        if (data) setDadosCidadao(data);

        const foto = await fetchFotoCidadao();
        if (foto) {
          setFotoUrl(foto);
          setCidadaoPossuiFoto(true);
        }
      }
    };
    carregarDadosCidadao();
  }, [isAuthenticated]);

  return (
    <CidadaoContext.Provider value={{ dadosCidadao, fotoUrl, cidadaoPossuiFoto, orgaoSlug, setores }}>
      {children}
    </CidadaoContext.Provider>
  );
};

export const useCidadao = () => useContext(CidadaoContext);
