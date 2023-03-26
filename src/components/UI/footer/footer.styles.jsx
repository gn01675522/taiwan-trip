import styled from "styled-components";
import { screenWide } from "../../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

export const FooterBody = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  bottom: 0;
  font-size: 12px;
  font-weight: 400;
  color: #acacac;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 998;
  @media screen and (max-width: ${pc}) {
    height: 32px;
  }
`;
