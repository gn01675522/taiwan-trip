import styled from "styled-components";
import { screenWide } from "../../../dummy_data/DUMMY_DATA";

const { pc } = screenWide;

export const BlockOutline = styled.div`
  display: flex;
  position: relative;
  width: 84vw;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: ${pc}) {
    width: 100%;
  }
`;

export const ContentTitle = styled.span`
  display: flex;
  width: max-content;
  height: 29px;
  font-size: 20px;
  font-weight: 400;
  gap: 13px;
  justify-content: space-between;
  align-items: center;
`;

export const TriangleSymbol = styled.span`
  display: inline-block;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0px 10px 20px 10px;
  border-color: transparent transparent red transparent;
`;

export const SquareSymbol = styled.span`
  width: 20px;
  height: 20px;
  background-color: #ffb72c;
`;
