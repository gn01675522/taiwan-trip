import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(210, 210, 210, 0.75);
  backdrop-filter: blur(14px);
  overflow: auto;
  scrollbar-width: none;
  justify-content: center;
  z-index: 1000;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  position: fixed;
  width: 50%;
  gap: 12px;
  top: 5vh;
  z-index: 1001;
`;
