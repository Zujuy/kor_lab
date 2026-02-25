import styled from 'styled-components';

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

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0a0a0a;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: white;
  span { color: ${props => props.theme.colors.primary}; }
`;

export const Subtitle = styled.p`
  color: #888;
  margin-bottom: 30px;
`;

export const MainButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  font-weight: bold;
`;