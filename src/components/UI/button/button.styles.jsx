import { ReactComponent as Search } from "../../../assets/svg/search.svg";
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

export const WhiteTriangleSymbol = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 6px 0px 6px 6px;
  border-color: transparent transparent transparent white;
`;

export const BlackTriangleSymbol = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 6px 6px 6px 0px;
  border-color: transparent black transparent transparent;
`;

export const WhiteCrossSymbol = styled.span`
  :before {
    width: 10px;
    height: 2px;
    color: white;
    transform: rotate(45deg);
  }
  :after {
    width: 10px;
    height: 2px;
    color: white;
    transform: rotate(45deg);
  }
`;
