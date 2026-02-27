import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Agregamos useNavigate
import { Navbar as NavbarStyled, Logo, NavLinks } from '../styles/AppStyles';

function NavBar() {
  const navigate = useNavigate();

  const goToRoutines = (e) => {
    e.preventDefault();
    navigate('/rutinas');
  };

  return (
    <NavbarStyled>
      <Logo>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          KØR<span>LAB</span>
        </Link>
      </Logo>
      <NavLinks>
        <a href="/#clases">Clases</a>
        <a href="/#horarios">Horarios</a>
        <a href="/#costos">Costos</a>
        <Link 
          to="/rutinas" 
          onClick={goToRoutines}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Rutinas
        </Link>
        
        <a href="/#galeria">Galeria</a>
        <a href="/#contacto">Contacto</a>
      </NavLinks>
    </NavbarStyled>
  );
}

export default NavBar;