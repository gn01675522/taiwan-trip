import styled from "styled-components";

export const Outline = styled.div`
  outline: 1px solid red;
  display: grid;
  grid-template-columns: repeat(2, 299px);
  grid-template-rows: repeat(12, 44px);
  grid-auto-flow: column;
  grid-gap: 32px 96px;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const BusTimeTable = styled.div`
  outline: 1px solid red;
  display: flex;
  gap: 33px;
  width: 100%;
  height: 44px;
`;

export const BusTime = styled.div`
  width: 200px;
  height: 100%;
  outline: 1px solid #0d0b0c;
  border-radius: 7px;
`;
export const BusName = styled.div`
  outline: 1px solid purple;
  width: 100%;
  height: 100%;
  line-height: 44px;
  color: #0d0b0c;
  font-size: 16px;
  font-weight: 400;
`;
