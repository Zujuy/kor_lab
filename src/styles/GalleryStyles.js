import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const GallerySection = styled.section`
  padding: 100px 8%;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Contenedor Masonry
export const MasonryGrid = styled.div`
  column-count: 4; // 4 columnas en desktop
  column-gap: 15px;
  width: 100%;
  max-width: 1400px;
  
  @media (max-width: 1200px) { column-count: 3; }
  @media (max-width: 900px) { column-count: 2; }
  @media (max-width: 600px) { column-count: 1; } // 1 columna en móvil
`;

export const GalleryItem = styled.div`
  display: inline-block; // Crucial para Masonry
  width: 100%;
  margin-bottom: 15px; // Espacio entre elementos (fila)
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: #1a1a1a; // Fondo de carga sutil
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease forwards;
  
  /* Evita que un elemento se corte entre columnas */
  break-inside: avoid; 

  &:hover {
    transform: translateY(-5px);
    border-color: #ff4d4d;
    box-shadow: 0 10px 30px rgba(255, 77, 77, 0.2);
    z-index: 1;
  }

  img, video {
    width: 100%;
    height: auto; // Masonry respeta la altura original
    display: block;
    object-fit: cover;
  }

  /* Overlay sutil para videos */
  &.video-item::after {
    content: '▶ VIDEO';
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 77, 77, 0.8);
    color: #fff;
    font-size: 0.65rem;
    font-weight: 900;
    padding: 3px 8px;
    border-radius: 4px;
    letter-spacing: 1px;
    pointer-events: none;
    opacity: 0.7;
  }
`;