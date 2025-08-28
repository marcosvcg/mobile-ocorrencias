import './css/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Ocorrências</div>
      <div className="navbar-user">
        <img src="/user-icon.svg" alt="Usuário" />
        <span className="arrow">&#9662;</span>
      </div>
    </nav>
  );
};

export default NavBar;
