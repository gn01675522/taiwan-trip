import styled from "styled-components";
import { ReactComponent as Search } from "../../../assets/search.svg";

const BlackSquareBtn = styled.div`
  display: flex;
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #0d0b0c;
  top: 100px;
  right: -60px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2); ;
`;

const WhiteSquareBtn = styled.div`
  display: flex;
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #ffffff;
  top: 100px;
  right: -60px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2); ;
`;

const PinkSquareBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: #ff1d6c;
  grid-area: btn;
  border: none;
`;

const WhiteTriangleSymbol = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 6px 0px 6px 6px;
  border-color: transparent transparent transparent white;
`;

const BlackTriangleSymbol = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 6px 6px 6px 0px;
  border-color: transparent black transparent transparent;
`;

export const SearchBtn = () => {
  return (
    <PinkSquareBtn>
      <Search />
    </PinkSquareBtn>
  );
};

export const NextBtn = () => {
  return (
    <BlackSquareBtn>
      <WhiteTriangleSymbol />
    </BlackSquareBtn>
  );
};

export const PreviousBtn = () => {
  return (
    <WhiteSquareBtn>
      <BlackTriangleSymbol />
    </WhiteSquareBtn>
  );
};
