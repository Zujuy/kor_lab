import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles'; 
// Importamos todo de los archivos correctos
import { 
  Navbar, Logo, NavLinks, HeroSection, Title, Subtitle, MainButton 
} from './styles/AppStyles';

import { 
  Section, SectionTitle, Grid, Card, TableContainer, StyledTable,
} from './styles/SectionStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar>
        <Logo>KØR<span>LAB</span></Logo>
        <NavLinks>
          <a href="#clases">Clases</a>
          <a href="#costos">Costos</a>
        </NavLinks>
      </Navbar>

      <HeroSection>
        <Title>KØR <span>LAB</span></Title>
        <Subtitle>Calistenia y Movimiento.</Subtitle>
        <MainButton>Entrar</MainButton>
      </HeroSection>

      <Section id="clases">
        <SectionTitle>Clases</SectionTitle>
        <Grid>
          <Card><h3>Calistenia</h3><p>Fuerza total.</p></Card>
        </Grid>
      </Section>

      <Section id="horarios">
  <SectionTitle><span>Schedule</span>Horarios de Entrenamiento</SectionTitle>
  <TableContainer>
    <StyledTable>
      <thead>
        <tr>
          <th>Bloque</th>
          <th>Lunes a Viernes</th>
          <th>Sábados</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mañana</td>
          <td>06:00 | 07:00 | 08:00 | 09:00</td>
          <td>08:00 | 09:00 | 10:00</td>
        </tr>
        <tr>
          <td>Tarde</td>
          <td>05:00 | 06:00 | 07:00</td>
          <td>Cerrado</td>
        </tr>
        <tr>
          <td>Noche</td>
          <td>08:00 | 09:00</td>
          <td>Cerrado</td>
        </tr>
      </tbody>
    </StyledTable>
  </TableContainer>
</Section>
    </>
  );
}

export default App;