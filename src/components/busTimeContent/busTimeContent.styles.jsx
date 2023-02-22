import styled from "styled-components";

export const Outline = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 299px);
  grid-template-rows: repeat(auto-fit, 44px);
  grid-auto-flow: column;
  grid-gap: 32px 96px;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const BusTimeTable = styled.div`
  display: flex;
  gap: 33px;
  width: 100%;
  height: 44px;
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
