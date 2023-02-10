import styled from "styled-components";

export const BlockOutline = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 12px;
  outline: 1px solid red;
`;

export const ContentTitle = styled.div`
  display: flex;
  width: 114px;
  height: 29px;
  line-height: 29px;
  font-size: 20px;
  font-weight: 400;
  gap: 13px;
  justify-content: space-between;
  align-items: center;
  outline: 1px solid red;
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
