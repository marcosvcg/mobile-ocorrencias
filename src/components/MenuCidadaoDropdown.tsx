import { ChevronDown, Power } from "lucide-react"
import FotoCidadao from "./FotoCidadao"
import { useState } from "react";
import "./css/MenuCidadaoDropdown.css"

const MenuCidadaoDropdown = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <>
        <button onClick={toggleDropdown}>
        <FotoCidadao />
        <ChevronDown />
        </button>

        {isOpen && (
        <div className="dropdown-cidadao-menu">
          <div className="dropdown-cidadao-item user-info">
            <strong>teste</strong>
            <div>teste</div>
          </div>
          <hr />
          <div className="dropdown-cidadao-item logout" onClick={toggleDropdown}>
            <Power size={16} color="#e53935" style={{ marginRight: '6px' }} />
            <span>Desconectar</span>
          </div>
        </div>
      )}
        </>
    )
}

export default MenuCidadaoDropdown;