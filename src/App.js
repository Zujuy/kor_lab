import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { 
  Navbar, Logo, NavLinks, Subtitle, MainButton, HeroSection, HeroContent, Slide, LogoContainer, MainLogo
} from './styles/AppStyles';

import { 
  Section, SectionTitle, ScheduleSection, ScheduleContainer, TableTitle, GridTable, HeaderCell, TimeCell, ClassCell, PricingSection, PricingIntro, PricingGrid, PriceCard, OfficeBanner, InfoSection, InfoRow, InfoImage, InfoText, Tag
} from './styles/SectionStyles';

const heroImages = [
  { url: '/assets/img1.jpg', delay: 4 },
  { url: '/assets/img2.jpg', delay: 8 },
  { url: '/assets/img3.png', delay: 12 },
  { url: '/assets/img4.png', delay: 16 },
];

const days = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar>
        <Logo>KØR<span>LAB</span></Logo>
        <NavLinks>
          <a href="#clases">Clases</a>
          <a href="#horarios">Horarios</a>
          <a href="#costos">Costos</a>
        </NavLinks>
      </Navbar>

      <HeroSection>
      {heroImages.map((img) => (
        <Slide key={img.id} bg={img.url} delay={img.delay} />
      ))}

      <HeroContent>
        <LogoContainer>
          <MainLogo>
            <div className="kor">
              K<span className="o-slash">O</span>R
            </div>
            <div className="lab">LAB</div>
          </MainLogo>
        </LogoContainer>
        
        <Subtitle>Domina tu cuerpo. Forja tu mente.</Subtitle>
        <a href="#costos" style={{ textDecoration: 'none' }}>
          <MainButton>Empezar Entrenamiento</MainButton>
        </a>
      </HeroContent>
    </HeroSection>

      <Section id="clases">
        <SectionTitle>Clases</SectionTitle>
        <InfoSection id="disciplinas">
  
  {/* CALISTENIA */}
  <InfoRow>
    <InfoImage img="/assets/calistenia.jpg" />
    <InfoText>
      <Tag>Fuerza Pura</Tag>
      <h3>Cali<span>stenia</span></h3>
      <p>
        El arte de dominar tu propio peso. Aquí no usamos máquinas, <strong>tú eres la máquina</strong>. 
        Aprenderás desde los básicos (dominadas, flexiones) hasta progresiones de nivel olímpico 
        como el Muscle Up y el Front Lever. Ideal para construir un cuerpo atlético, funcional y estético.
      </p>
    </InfoText>
  </InfoRow>

  {/* ISOMETRÍA */}
  <InfoRow reverse>
    <InfoImage img="/assets/isometria.png" />
    <InfoText>
      <Tag>Control Total</Tag>
      <h3>Iso<span>metría</span></h3>
      <p>
        La batalla contra la gravedad. En esta clase nos enfocamos en el <strong>tiempo bajo tensión</strong> 
        manteniendo posturas estáticas que reclutan cada fibra muscular. Es la clave para fortalecer 
        tendones, articulaciones y ganar esa "fuerza de hierro" necesaria para sostener cualquier movimiento.
      </p>
    </InfoText>
  </InfoRow>

  {/* ANIMAL FLOW */}
  <InfoRow>
    <InfoImage img="/assets/flow.png" />
    <InfoText>
      <Tag>Movilidad Primal</Tag>
      <h3>Animal <span>Flow</span></h3>
      <p>
        Fluidez, agilidad y potencia. Animal Flow combina movimientos cuadrúpedos y de suelo 
        para mejorar la comunicación entre tu cuerpo y tu mente. Es un entrenamiento dinámico 
        que desbloquea tu movilidad y te enseña a moverte en todos los planos de forma explosiva.
      </p>
    </InfoText>
  </InfoRow>

  {/* STRETCH */}
  <InfoRow reverse>
    <InfoImage img="/assets/stretch.jpg" />
    <InfoText>
      <Tag>Recuperación</Tag>
      <h3>Str<span>etch</span></h3>
      <p>
        El mantenimiento que tu cuerpo exige. No es solo estirarse; es <strong>recuperar espacio en tus articulaciones</strong>. 
        Enfocada en flexibilidad asistida y consciencia respiratoria, esta clase es vital para prevenir 
        lesiones y asegurar que tu rango de movimiento crezca junto con tu fuerza.
      </p>
    </InfoText>
  </InfoRow>

</InfoSection>
      </Section>

      <Section id="horarios">
  <ScheduleSection id="horarios">
      
      {/* SECCIÓN MAÑANA */}
      <TableTitle>Horarios Mañana</TableTitle>
      <ScheduleContainer>
        <GridTable>
          <div /> {/* Espacio vacío superior izquierdo */}
          {days.map(day => <HeaderCell key={day}>{day}</HeaderCell>)}

          {/* 6:00 a 7:00 / 7:00 a 8:00 / 8:00 a 9:00 (Misma info) */}
          {[ "6:00 A 7:00", "7:00 A 8:00", "8:00 A 9:00" ].map(time => (
            <React.Fragment key={time}>
              <TimeCell>{time}</TimeCell>
              <ClassCell><span className="class-name">JALE</span><span className="coach-name">ISRAEL</span></ClassCell>
              <ClassCell><span className="class-name">PIERNA</span><span className="coach-name">ISRAEL</span></ClassCell>
              <ClassCell><span className="class-name">EMPUJE</span><span className="coach-name">ISRAEL</span></ClassCell>
              <ClassCell><span className="class-name">PIERNA</span><span className="coach-name">ISRAEL</span></ClassCell>
              <ClassCell><span className="class-name">ISOMETRÍA</span><span className="coach-name">ISRAEL</span></ClassCell>
              {time === "8:00 A 9:00" ? 
                <ClassCell><span className="class-name">ANIMAL FLOW</span><span className="coach-name">ALEX</span></ClassCell> : 
                <ClassCell className="empty" />
              }
            </React.Fragment>
          ))}

          {/* 9:00 a 10:00 */}
          <TimeCell>9:00 A 10:00</TimeCell>
          <ClassCell className="empty" /><ClassCell className="empty" /><ClassCell className="empty" />
          <ClassCell className="empty" /><ClassCell className="empty" />
          <ClassCell><span className="class-name">STRETCH</span><span className="coach-name">ROX</span></ClassCell>
        </GridTable>
      </ScheduleContainer>

      {/* SECCIÓN NOCHE */}
      <TableTitle>Horarios Noche</TableTitle>
      <ScheduleContainer>
        <GridTable>
          <div />
          {days.map(day => <HeaderCell key={day}>{day}</HeaderCell>)}

          {[ "18:00 A 19:00", "19:00 A 20:00", "20:00 A 21:00" ].map(time => (
            <React.Fragment key={time}>
              <TimeCell>{time}</TimeCell>
              <ClassCell>
                <span className="class-name">JALE / PIERNA</span>
                <span className="coach-name">FELIPE + ISAEL</span>
              </ClassCell>
              <ClassCell>
                <span className="class-name">PIERNA / JALE</span>
                <span className="coach-name">FELIPE + ISAEL</span>
              </ClassCell>
              <ClassCell>
                <span className="class-name">EMPUJE / PIERNA</span>
                <span className="coach-name">FELIPE + ISAEL</span>
              </ClassCell>
              <ClassCell>
                <span className="class-name">PIERNA / EMPUJE</span>
                <span className="coach-name">FELIPE + ISAEL</span>
              </ClassCell>
              <ClassCell>
                <span className="class-name">ISOMETRÍA</span>
                <span className="coach-name">FELIPE + ISAEL</span>
              </ClassCell>
              <ClassCell className="empty" />
            </React.Fragment>
          ))}
        </GridTable>
      </ScheduleContainer>
    </ScheduleSection>
</Section>

<PricingSection id="costos">
      <PricingIntro>
        <h2>Invierte en tu <span>Poder</span></h2>
        <p>
          Ofrecemos clases grupales de Calistenia y Consciencia Corporal diseñadas para todos los niveles. 
          Desde lo básico hasta lo explosivo, forjamos atletas reales.
        </p>
      </PricingIntro>

      <PricingGrid>
        {/* CLASE SUELTA */}
        <PriceCard>
          <h4>DROP-IN</h4>
          <h3>CLASE SUELTA</h3>
          <div className="price">$170<span>MXN</span></div>
          <p style={{color: '#ff4d4d', fontWeight: 'bold'}}>¡TU PRIMER CLASE ES GRATIS!</p>
          <ul>
            <li>Acceso a cualquier sesión</li>
            <li>Coach personalizado</li>
            <li>Sin inscripciones</li>
          </ul>
          <MainButton>PROBAR GRATIS</MainButton>
        </PriceCard>

        {/* KOR PLUS */}
        <PriceCard className="featured">
          <h4>ELITE TRAINING</h4>
          <h3>KØR PLUS</h3>
          <div className="price">$1,500<span>/MES</span></div>
          <ul>
            <li>Entrenamiento 5 días/semana</li>
            <li>Sesiones de 1 hora</li>
            <li>Incluye Clases de Sábado</li>
            <li>Plan de progresión técnica</li>
          </ul>
          <MainButton>ELEGIR PLUS</MainButton>
        </PriceCard>

        {/* KOR SHORT */}
        <PriceCard>
          <h4>FLEXIBLE</h4>
          <h3>KØR SHORT</h3>
          <div className="price">$1,350<span>/MES</span></div>
          <ul>
            <li>Entrenamiento 3 días/semana</li>
            <li>Sesiones de 1 hora</li>
            <li>Incluye Clases de Sábado</li>
            <li>Ideal para complementar</li>
          </ul>
          <MainButton>ELEGIR SHORT</MainButton>
        </PriceCard>
      </PricingGrid>

      <OfficeBanner>
        <div>
          <h3>¿TRABAJAS EN CORPORATIVO?</h3>
          <p>Pregunta por nuestros planes especiales <strong>BACK TO THE OFFICE</strong>. Elevamos la productividad de tu equipo a través del movimiento.</p>
        </div>
        <MainButton style={{background: '#000'}}>MÁS INFORMACIÓN</MainButton>
      </OfficeBanner>
    </PricingSection>
    </>
  );
}

export default App;