import styled from "styled-components";
import { screenWide } from "../../dummy_data/DUMMY_DATA";

const { pc } = screenWide;

export const CityListContent = styled.div`
  display: flex;
  width: 93vw;
  height: 100%;
  gap: 21px;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  @media screen and (min-width: ${pc}) {
    width: 100%;
    overflow-x: auto;
  }
`;

export const CityListLayout = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  grid-template-rows: repeat(2, 95px);
  grid-template-columns: repeat(10, 159px);
  grid-gap: 5px 13px;
  grid-template-areas:
    "div0 div1 div3 div4 div6 div7 div8 div10 div11 div13"
    "div0 div2 div3 div5 div6 div7 div9 div10 div12 div13";
  @media screen and (min-width: ${pc}) {
    grid-template-rows: repeat(2, 120px);
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "div0 div1 div3 div4 div6"
      "div0 div2 div3 div5 div6";
  }
`;
