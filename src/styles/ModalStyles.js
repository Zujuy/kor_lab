import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const ModalContainer = styled.div`
  background: #111;
  border: 1px solid #ff4d4d;
  padding: 40px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  position: relative;
  
  h3 { color: #fff; margin-bottom: 10px; text-transform: uppercase; }
  p { color: #888; font-size: 0.9rem; margin-bottom: 25px; }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    background: #222;
    border: 1px solid #444;
    padding: 12px;
    color: #fff;
    border-radius: 4px;
    outline: none;
    &:focus { border-color: #ff4d4d; }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px; right: 15px;
  background: none; border: none;
  color: #fff; font-size: 1.5rem; cursor: pointer;
`;