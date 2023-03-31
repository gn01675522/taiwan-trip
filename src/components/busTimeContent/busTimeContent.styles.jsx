import styled from "styled-components";
import { screenWide } from "../../dummy_data/DUMMY_DATA";

const { pad } = screenWide;

export const Outline = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(auto-fit, 44px);
  grid-auto-flow: dense;
  grid-gap: 32px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  @media screen and (min-width: ${pad}) {
    grid-template-columns: repeat(2, 299px);
    grid-auto-flow: column;
  }
`;

export const BusTimeTable = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  height: 44px;
  @media screen and (min-width: ${pad}) {
    gap: 33px;
  }
`;

export const BusTime = styled.div`
  width: 200px;
  line-height: 44px;
  font-size: 16px;
  font-weight: 400;
  color: #0d0b0c;
  outline: 2px solid #0d0b0c;
  border-radius: 7px;
  text-align: center;
`;

export const BusName = styled.div`
  width: 100%;
  height: 100%;
  line-height: 44px;
  color: #0d0b0c;
  font-size: 16px;
  font-weight: 400;
`;
