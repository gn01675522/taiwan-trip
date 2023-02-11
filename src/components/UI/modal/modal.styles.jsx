import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba(210, 210, 210, 0.75);
  backdrop-filter: blur(14px);
  z-index: 1000;
`;

export const ModalBody = styled.div`
  display: flex;
  position: fixed;
  gap: 12px;
  top: 5vh;
  width: 676px;
`;
