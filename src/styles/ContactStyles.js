import styled from 'styled-components';

export const ContactSection = styled.footer`
  padding: 100px 8% 50px;
  background: #050505;
  border-top: 1px solid rgba(255, 77, 77, 0.2);
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const ContactInfo = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 900;
    color: #fff;
    margin-bottom: 30px;
    span { color: #ff4d4d; }
  }

  p {
    color: #888;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 40px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;

    svg {
      width: 28px;
      height: 28px;
      fill: #fff; // Blanco por defecto
      transition: all 0.3s ease;
    }

    &:hover {
      color: #ff4d4d;
      svg {
        fill: #ff4d4d;
        filter: drop-shadow(0 0 8px #ff4d4d);
      }
    }
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  filter: grayscale(1) invert(1) contrast(1.2); // El toque "Dark Mode" de Maps
  transition: filter 0.5s ease;

  &:hover {
    filter: grayscale(0) invert(0) contrast(1);
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 30px;
  color: #444;
  font-size: 0.8rem;
  letter-spacing: 1px;
`;