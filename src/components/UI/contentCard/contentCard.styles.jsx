import styled from "styled-components";

export const CardOutline = styled.div`
  display: flex;
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
  justify-content: space-between;
  outline: 1px solid red;
`;

export const TriangleSymbol = styled.span`
  display: inline-block;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 10px;
  border-color: transparent transparent red transparent;
`;
