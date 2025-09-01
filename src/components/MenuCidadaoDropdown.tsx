import { ChevronDown, Power } from "lucide-react"
import { useEffect, useState } from "react";
import { fetchDadosCidadao } from "../service/apiSSO";
import { formatarCPF } from "../util/formatarCPF";
import FotoCidadao from "./FotoCidadao"
import "./css/MenuCidadaoDropdown.css"

const MenuCidadaoDropdown = () => {
const [isOpen, setIsOpen] = useState(false);
const [dadosCidadao, setDadosCidadao] = useState<any>(null);
const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
          const carregarDadosCidadao = async () => {
              const data = await fetchDadosCidadao();
              if (data) {
                  setDadosCidadao(data);
              }
          };
          carregarDadosCidadao();
      }, []);

const logout = () => {
  window.location.href = `${import.meta.env.VITE_SSO_LOGOUT}`;
}

    return (
        <>
        <button onClick={toggleDropdown}>
        <FotoCidadao />
        <ChevronDown />
        </button>

        {isOpen && (
        <div className="dropdown-cidadao-menu">
          <div className="dropdown-cidadao-item user-info">
            <strong className="nome">{dadosCidadao[0].nome}</strong>
            <div className="cpf">{formatarCPF(dadosCidadao[0].cpf)}</div>
          </div>
          <hr />
          <div className="dropdown-cidadao-item logout" onClick={toggleDropdown}>
            <Power size={16} color="#e53935" style={{ marginRight: '6px' }} />
            <span onClick={logout}>Desconectar</span>
          </div>
        </div>
      )}
        </>
    )
}

export default MenuCidadaoDropdown;