import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 8%;
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