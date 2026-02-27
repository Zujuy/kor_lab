import React, { useEffect } from 'react';
import { PricingIntro } from '../styles/SectionStyles';
import { GlobalStyles } from '../styles/GlobalStyles'; 
import { 
  PageWrapper, RoutineSection, RoutineGrid, ResourceCard, Badge 
} from '../styles/RoutineStyles';

function RoutinesPage() {
  // Aseguramos que la página cargue desde el inicio del scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <GlobalStyles />
    <PageWrapper>
      <RoutineSection>
        <PricingIntro>
          <h2>CENTRO DE <span>RUTINAS</span></h2>
          <p>
            Recursos técnicos y guías de entrenamiento exclusivos para la comunidad KØR LAB.
          </p>
        </PricingIntro>

        <RoutineGrid>
          {/* CARD DE VIDEO */}
          <ResourceCard>
            <Badge style={{background: '#333'}}>Próximamente</Badge>
            <Badge>Video Tutorial</Badge>
            <h3>Técnica de Muscle Up</h3>
            <p>Aprende el balanceo y la transición explosiva necesaria para dominar la barra.</p>
          </ResourceCard>

          {/* CARD DE PDF */}
          <ResourceCard>
            <Badge style={{background: '#333'}}>Próximamente</Badge>
            <Badge>Guía PDF</Badge>
            <h3>Fundamentos de Fuerza</h3>
            <p>Descarga nuestro plan de 4 semanas enfocado en básicos: Push-ups, Pull-ups y Dips.</p>
          </ResourceCard>
        </RoutineGrid>
      </RoutineSection>
    </PageWrapper>
    </>
  );
}

export default RoutinesPage;