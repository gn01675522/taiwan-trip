import styled from "styled-components";

export const CityListContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 21px;
  justify-content: center;
  align-items: center;
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
`;
