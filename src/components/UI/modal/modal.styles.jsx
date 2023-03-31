import styled from "styled-components";
import { screenWide } from "../../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

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
  width: 80%;
  flex-direction: column-reverse;
  gap: 12px;
  top: 5vh;
  align-items: end;
  z-index: 1001;
  @media screen and (min-width: ${pad}) {
    width: 90%;
    gap: 22px;
    top: 11vh;
  }
  @media screen and (min-width: ${pc}) {
    width: 50%;
    flex-direction: row;
    align-items: start;
    gap: 17px;
    top: 6vh;
  }
`;
