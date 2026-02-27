import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding-top: 120px; /* Espacio vital para que el Navbar no tape el título */
  background: #000;
  min-height: 100vh;
  color: #fff;
`;

export const RoutineSection = styled.section`
  padding: 50px 8%;
  max-width: 1300px;
  margin: 0 auto;
`;

export const RoutineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

export const ResourceCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 15px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &:hover {
    border-color: #ff4d4d;
    transform: translateY(-10px);
    background: rgba(255, 77, 77, 0.05);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
  }

  p {
    color: #aaa;
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

export const Badge = styled.span`
  background: #ff4d4d;
  color: #fff;
  padding: 4px 12px;
  font-size: 0.7rem;
  font-weight: 900;
  border-radius: 4px;
  align-self: flex-start;
  text-transform: uppercase;
`;