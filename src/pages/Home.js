import React, { useState } from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'; 
import { 
  Subtitle, MainButton, HeroSection, HeroContent, Slide, LogoContainer, MainLogo
} from '../styles/AppStyles';

import { 
  Section, SectionTitle, ScheduleSection, ScheduleContainer, TableTitle, GridTable, HeaderCell, TimeCell, ClassCell, PricingSection, PricingIntro, PricingGrid, PriceCard, OfficeBanner, InfoSection, InfoRow, InfoImage, InfoText, Tag, PetFriendlySection
} from '../styles/SectionStyles';

import { 
  ContactSection, ContactGrid, ContactInfo, 
  SocialLinks, MapContainer, Copyright 
} from '../styles/ContactStyles';

import { GallerySection, MasonryGrid, GalleryItem } from '../styles/GalleryStyles';

import { ModalOverlay, ModalContainer, Form, CloseButton } from '../styles/ModalStyles';

const heroImages = [
  { id: 1, url: '/assets/img1.jpg', delay: 4 },
  { id: 2, url: '/assets/img2.jpg', delay: 8 },
  { id: 3, url: '/assets/img3.png', delay: 12 },
  { id: 4, url: '/assets/img4.png', delay: 16 },
];

const days = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSending(true);

  try {
    const response = await fetch('./send_mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        plan: selectedPlan
      }),
    });

    const result = await response.json();

    if (result.status === 'success') {
      alert(`¡Perfecto! Hemos recibido tu solicitud para el plan ${selectedPlan}. Te contactaremos pronto.`);
      setIsModalOpen(false);
      setEmail('');
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error enviando el mail:", error);
    alert("Hubo un problema con el servidor. Por favor, intenta de nuevo más tarde.");
  } finally {
    setIsSending(false);
  }
};

  return (
    <>
      <GlobalStyles />
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
              <ClassCell><span className="class-name">JALE</span><span className="coach-name">ISAEL</span></ClassCell>
              <ClassCell><span className="class-name">PIERNA</span><span className="coach-name">ISAEL</span></ClassCell>
              <ClassCell><span className="class-name">EMPUJE</span><span className="coach-name">ISAEL</span></ClassCell>
              <ClassCell><span className="class-name">PIERNA</span><span className="coach-name">ISAEL</span></ClassCell>
              <ClassCell><span className="class-name">ISOMETRÍA</span><span className="coach-name">ISAEL</span></ClassCell>
              <ClassCell className="empty" />
              {/*{time === "8:00 A 9:00" ? 
                <ClassCell><span className="class-name">ANIMAL FLOW</span><span className="coach-name">ALEX</span></ClassCell> : 
                <ClassCell className="empty" />
              }*/}
            </React.Fragment>
          ))}
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
            <MainButton onClick={() => openModal('GRATIS')}>
            CLASE GRATIS
            </MainButton>
        </PriceCard>

        {/* MODAL */}
      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContainer onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
            <h3>PLAN <span>{selectedPlan}</span></h3>
            <p>Déjanos tu correo y te enviaremos los detalles para tu inscripción.</p>
            
            <Form onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Tu correo" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSending}
              />
              <MainButton type="submit" disabled={isSending}>
                {isSending ? 'ENVIANDO...' : 'SOLICITAR INFORMACIÓN'} 
              </MainButton>
            </Form>
          </ModalContainer>
        </ModalOverlay>
      )}

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
            <MainButton onClick={() => openModal('KOR PLUS')}>
            ELEGIR PLUS
            </MainButton>
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
            <MainButton onClick={() => openModal('KOR SHORT')}>
            ELEGIR SHORT
            </MainButton>
        </PriceCard>
      </PricingGrid>

      <OfficeBanner>
        <div>
          <h3>¿TRABAJAS EN OFICINA?</h3>
          <p>Pregunta por nuestros planes <strong>BACK TO THE OFFICE</strong>. Deja de ser un espectador detrás del monitor y recupera la fuerza que tu cuerpo perdió en el escritorio.</p>
        </div>
          <MainButton style={{background: '#000'}} onClick={() => openModal('OFFICE')}>MÁS INFORMACIÓN</MainButton>
      </OfficeBanner>
    </PricingSection>

    <GallerySection id="galeria">
      <PricingIntro>
        <h2>MOVIMIENTO EN <span>ACCIÓN</span></h2>
        <p>Comunidad KØR LAB capturada en el momento.</p>
      </PricingIntro>

      <MasonryGrid>
        {/* ITEM 1: FOTO (Vertical) */}
        <GalleryItem>
          <img src="/assets/galeria1.jpg" alt="Entrenamiento Vertical" />
        </GalleryItem>

        {/* ITEM 2: VIDEO (Cuadrado/Horizontal) */}
        <GalleryItem className="video-item">
          <video 
            muted 
            loop 
            playsInline 
            autoPlay
          >
            <source src="/assets/video1.mp4" type="video/mp4" />
            Tu navegador no soporta video MP4.
          </video>
        </GalleryItem>

        {/* ITEM 3: FOTO (Horizontal) */}
        <GalleryItem>
          <img src="/assets/galeria2.jpg" alt="Calistenia Grupal" />
        </GalleryItem>

        {/* ITEM 4: FOTO (Vertical) */}
        <GalleryItem>
          <img src="/assets/galeria3.jpg" alt="Muscle Up Progresión" />
        </GalleryItem>

        {/* ITEM 5: VIDEO (Vertical) */}
        <GalleryItem className="video-item">
          <video muted loop playsInline autoPlay>
            <source src="/assets/video2.mp4" type="video/mp4" />
          </video>
        </GalleryItem>

        {/* ITEM 6: FOTO (Cuadrada) */}
        <GalleryItem>
          <img src="/assets/galeria4.png" alt="Focus en Isometría" />
        </GalleryItem>

        {/* ITEM 7: FOTO (Vertical) */}
        <GalleryItem>
          <img src="/assets/galeria5.jpg" alt="Comunidad KOR LAB" />
        </GalleryItem>

        {/* ITEM 8: FOTO (Cuadrada) */}
        <GalleryItem>
          <img src="/assets/galeria6.png" alt="Focus en Isometría" />
        </GalleryItem>

        {/* ITEM 9: VIDEO (Vertical) */}
        <GalleryItem className="video-item">
          <video muted loop playsInline autoPlay>
            <source src="/assets/video3.mp4" type="video/mp4" />
          </video>
        </GalleryItem>
      </MasonryGrid>
    </GallerySection>

    <PetFriendlySection>
      <img src="/assets/perrito1.jpeg" alt="Nuestro socio más fiel" />
      <h3>WE ARE <span>PET FRIENDLY</span></h3>
      <p>
        En KØR LAB sabemos que el entrenamiento es mejor en compañía. 
        Tu mejor amigo es bienvenido a quedarse mientras tú dominas la barra.
      </p>
    </PetFriendlySection>

    <ContactSection id="contacto">
      <ContactGrid>
        <ContactInfo>
          <h2>ÚNETE AL <span>LAB</span></h2>
            <p>
              José María Rico #68, Actipan,<br />
              Benito Juárez, 03230, CDMX.
            </p>
      
          <SocialLinks>
            {/* INSTAGRAM */}
            <a href="https://www.instagram.com/korlab_mx" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/>
              </svg>
            Instagram
            </a>

              {/* TIKTOK */}
            <a href="https://www.tiktok.com/@korlabmx" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.41 8.41 0 0 1-1.46-1.01V16c0 .54-.06 1.08-.18 1.61-.41 1.83-1.67 3.5-3.41 4.23-1.84.81-4.05.74-5.83-.17-1.92-.93-3.27-2.93-3.44-5.07-.15-2.2 1.01-4.4 2.91-5.5 1.25-.75 2.76-1.04 4.2-.84v4.28a3.52 3.52 0 0 0-1.4.34c-1.12.56-1.77 1.83-1.5 3.07.22 1.03.96 1.94 1.94 2.32.96.39 2.1.28 2.98-.3.94-.6 1.44-1.68 1.44-2.78V.02z"/>
              </svg>
            TikTok
            </a>
          </SocialLinks>
        </ContactInfo>

        <MapContainer>
          <iframe 
            title="Ubicación KOR LAB"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.856087754562!2d-99.1764619!3d19.3753232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff85fa64ce39%3A0xebeae6968f7777e5!2sJos%C3%A9%20Mar%C3%ADa%20Rico%2068%2C%20Actipan%2C%20Benito%20Ju%C3%A1rez%2C%2003230%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </MapContainer>
      </ContactGrid>

      <Copyright>
      © {new Date().getFullYear()} KØR LAB. TODOS LOS DERECHOS RESERVADOS.
      </Copyright>
    </ContactSection>
    </>
  );
}

export default App;