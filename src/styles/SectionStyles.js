import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px 8%;
  background: ${props => props.theme.colors.background};
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin-bottom: 40px;
  span { color: ${props => props.theme.colors.primary}; display: block; font-size: 1rem; }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  background: #111;
  padding: 20px;
  border-radius: 10px;
  h3 { color: ${props => props.theme.colors.primary}; }
  p { color: #888; }
`;

export const TableContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px; // Separa las filas para que respiren
  color: white;

  th {
    text-align: left;
    padding: 15px;
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 2px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  td {
    padding: 20px 15px;
    background: rgba(255, 255, 255, 0.02);
    font-size: 0.95rem;
    
    &:first-child {
      border-radius: 10px 0 0 10px;
      font-weight: 800;
      color: #888;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
  }

  tr:hover td {
    background: rgba(255, 77, 77, 0.05); // Un toque de rojo muy sutil al pasar el mouse
    color: white;
  }
`;

export const ScheduleSection = styled.section`
  padding: 100px 5%;
  background-color: #1a1a1a;
  background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png"); // Textura sutil ruda
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScheduleContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-bottom: 80px;
  overflow-x: auto; // Responsivo: permite scroll lateral en móvil
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff4d4d;
    border-radius: 10px;
  }
`;

export const TableTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 30px;
  border-left: 8px solid #ff4d4d;
  padding-left: 20px;
`;

export const GridTable = styled.div`
  display: grid;
  grid-template-columns: 120px repeat(6, 1fr); // Hora + 6 días
  gap: 8px;
  min-width: 800px; // Evita que se colapse en pantallas chicas
`;

export const HeaderCell = styled.div`
  background: #ff4d4d;
  color: #fff;
  padding: 15px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

export const TimeCell = styled.div`
  background: #ff4d4d;
  color: #fff;
  padding: 15px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.2;
`;

export const ClassCell = styled.div`
  background: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
    z-index: 2;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  .class-name {
    font-weight: 900;
    color: #000;
    text-transform: uppercase;
    font-size: 0.85rem;
    margin-bottom: 4px;
  }

  .coach-name {
    font-size: 0.7rem;
    color: #666;
    text-transform: uppercase;
  }

  &.empty {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const PricingSection = styled.section`
  padding: 100px 5%;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PricingIntro = styled.div`
  text-align: center;
  max-width: 800px;
  margin-bottom: 60px;
  
  h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 20px;
    span { color: #ff4d4d; }
  }
  
  p {
    color: #888;
    font-size: 1.1rem;
    line-height: 1.6;
    letter-spacing: 1px;
  }
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

export const PriceCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    border-color: #ff4d4d;
    background: rgba(255, 77, 77, 0.05);
  }

  &.featured {
    border: 2px solid #ff4d4d;
    background: rgba(255, 77, 77, 0.08);
    &::before {
      content: 'MÁS POPULAR';
      position: absolute;
      top: 20px;
      right: -30px;
      background: #ff4d4d;
      color: #fff;
      padding: 5px 40px;
      font-size: 0.7rem;
      font-weight: 900;
      transform: rotate(45deg);
    }
  }

  h4 {
    color: #ff4d4d;
    font-size: 0.8rem;
    letter-spacing: 3px;
    margin-bottom: 10px;
  }

  h3 {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 900;
    margin-bottom: 20px;
  }

  .price {
    font-size: 3rem;
    font-weight: 900;
    color: #fff;
    margin-bottom: 5px;
    span { font-size: 1rem; color: #555; }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 30px 0;
    text-align: center;
    li {
      color: #bbb;
      margin-bottom: 12px;
      font-size: 0.95rem;
      &::before { content: '✓ '; color: #ff4d4d; font-weight: bold; }
    }
  }
`;

export const OfficeBanner = styled.div`
  margin-top: 60px;
  width: 100%;
  max-width: 1200px;
  background: linear-gradient(90deg, #ff4d4d, #a30000);
  padding: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  div {
    flex: 1;
    min-width: 300px;
    h3 { font-size: 1.5rem; font-weight: 900; color: #fff; margin-bottom: 10px; }
    p { color: rgba(255,255,255,0.8); }
  }
`;

export const InfoSection = styled.section`
  padding: 100px 8%;
  background: #000;
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const InfoImage = styled.div`
  flex: 1;
  height: 450px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  border-left: 5px solid #ff4d4d;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 77, 77, 0.1);
    mix-blend-mode: overlay;
  }
`;

export const InfoText = styled.div`
  flex: 1;
  h3 {
    font-size: 3rem;
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 20px;
    span { color: #ff4d4d; }
  }
  p {
    color: #aaa;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 25px;
  }
`;

export const Tag = styled.span`
  background: rgba(255, 77, 77, 0.2);
  color: #ff4d4d;
  padding: 5px 15px;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  margin-bottom: 15px;
`;

export const PetFriendlySection = styled.div`
  background: #111;
  padding: 60px 20px;
  text-align: center;
  border-top: 1px solid #222;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ff4d4d;
    margin-bottom: 20px;
  }

  h3 {
    color: #fff;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  p {
    color: #888;
    max-width: 600px;
    margin: 0 auto;
    font-size: 0.9rem;
  }
`;