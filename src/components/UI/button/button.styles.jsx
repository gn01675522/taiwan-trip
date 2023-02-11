import styled from "styled-components";

const BaseButtonStyle = styled.button`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
`;

export const BlackSquareWrapper = styled(BaseButtonStyle)`
  position: absolute;
  top: 100px;
  right: -60px;
  background-color: #0d0b0c;
`;

export const WhiteSquareWrapper = styled(BaseButtonStyle)`
  background-color: #ffffff;
`;

export const PinkSquareWrapper = styled(BaseButtonStyle)`
  width: 40px;
  height: 40px;
  background-color: #ff1d6c;
  grid-area: btn;
`;

export const WhiteTriangularSymbol = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 6px 0px 6px 6px;
  border-color: transparent transparent transparent white;
`;

export const BlackTriangularSymbol = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 6px 6px 6px 0px;
  border-color: transparent black transparent transparent;
`;

export const RectangularWrapper = styled(BaseButtonStyle)`
  width: 120px;
  height: 40px;
  border: 1px solid #ff1d6c;
  border-radius: 8px;
  font-size: 14px;
  color: #ff1d6c;
  background-color: white;
  box-shadow: none;
`;
