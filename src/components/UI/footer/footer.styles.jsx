import styled from "styled-components";
import { screenWide } from "../../../dummy_data/DUMMY_DATA";

const { pc } = screenWide;

export const FooterBody = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  bottom: 0;
  font-size: 12px;
  font-weight: 400;
  color: #acacac;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 998;
  @media screen and (min-width: ${pc}) {
    height: 65px;
  }
`;
