import styled from "styled-components";
import { screenWide } from "../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

export const CityListContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 21px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${pc}) {
    width: 93vw;
    overflow-x: scroll;
  }
`;

export const CityListLayout = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  grid-template-rows: repeat(2, 120px);
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px 13px;
  grid-template-areas:
    "div0 div1 div3 div4 div6"
    "div0 div2 div3 div5 div6";
  @media screen and (max-width: ${pc}) {
    grid-template-rows: repeat(2, 95px);
    grid-template-columns: repeat(10, 159px);
    grid-template-areas:
      "div0 div1 div3 div4 div6 div7 div8 div10 div11 div13"
      "div0 div2 div3 div5 div6 div7 div9 div10 div12 div13";
  }
`;
