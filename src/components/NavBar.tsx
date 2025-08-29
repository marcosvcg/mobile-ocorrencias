import './css/NavBar.css';
import MenuCidadaoDropdown from './MenuCidadaoDropdown';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Ocorrências</div>
      <div className="navbar-user">
        <MenuCidadaoDropdown />
      </div>
    </nav>
  );
};

export default NavBar;
