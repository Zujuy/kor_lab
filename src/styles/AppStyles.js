import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(50px); filter: blur(15px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0); }
`;

const fadeBackground = keyframes`
  0% { opacity: 0; transform: scale(1.1); }
  10% { opacity: 1; transform: scale(1.05); }
  25% { opacity: 1; }
  35% { opacity: 0; transform: scale(1); }
  100% { opacity: 0; }
`;

export const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #000;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slide = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: ${fadeBackground} 25s infinite;
  animation-delay: ${props => props.delay}s;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.9) 100%);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInUp} 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
`;

// ESTO REEMPLAZA AL TITLE: Un contenedor para tu imagen de logo
export const HeroLogo = styled.img`
  width: clamp(250px, 40vw, 500px); // Se ajusta al tamaño de pantalla
  height: auto;
  margin-bottom: 30px;
  filter: drop-shadow(0 0 15px rgba(255, 77, 77, 0.3)); // Brillo sutil rojo
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #fff;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 300;
  opacity: 0.8;
  margin-bottom: 40px;
`;

export const MainButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  border: none;
  padding: 16px 40px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px ${props => props.theme.colors.primary};
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  height: 80px;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.div`
  font-weight: 900;
  font-size: 1.8rem;
  color: white;
  span { color: ${props => props.theme.colors.primary}; }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  a { color: white; text-decoration: none; text-transform: uppercase; font-size: 0.8rem; }
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: white;
  span { color: ${props => props.theme.colors.primary}; }
`;

