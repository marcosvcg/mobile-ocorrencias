import { useNavigate } from 'react-router-dom';
import './css/NavBar.css';
import MenuCidadaoDropdown from './MenuCidadaoDropdown';

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={handleClick}>Ocorrências</div>
      <div className="navbar-user">
        <MenuCidadaoDropdown />
      </div>
    </nav>
  );
};

export default NavBar;
