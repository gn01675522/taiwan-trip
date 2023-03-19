import styled from "styled-components";

import { screenWide } from "../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

export const BannerContentLayout = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  grid-gap: 8px;
  margin: 0 auto;
  justify-content: center;
  ${({ $pageType }) => {
    switch ($pageType) {
      case "traffic":
        return `
        grid-template-rows: 40px 50px;
        grid-gap: 41px;
        `;
      default:
        return `grid-template-rows: 70px 21px auto;`;
    }
  }}
`;

export const BannerTitle = styled.h1`
  display: inline-block;
  padding: 0 0;
  line-height: 70px;
  font-size: 50px;
  font-weight: 700;
  color: white;
  vertical-align: top;
`;

export const OSymbol = styled.span`
  display: inline-block;
  position: relative;
  width: 35px;
  height: 35px;
  margin-left: 3px;
  border: 7px solid #ff1d6c;
  border-radius: 50%;
  top: 5px;
`;

export const SquareSymbol = styled.span`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  border: 7px solid #ff1d6c;
  margin-left: 3px;
  margin-right: 10px;
  top: 3px;
`;

export const TaiwanText = styled.span`
  color: #ff1d6c;
`;

export const SpecialLetter = styled.span`
  display: inline;
  position: relative;
  margin: 0 3px 0 3px;
`;

export const TriangleSymbol = styled.span`
  position: absolute;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0px 10px 17px 10px;
  border-color: transparent transparent #ff1d6c transparent;
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg);
`;

export const ISymbol = styled.span`
  display: inline-block;
  width: 8px;
  height: 32px;
  background-color: #ff1d6c;
`;

export const BannerSubtitle = styled.h5`
  line-height: 21px;
  color: white;
`;

export const BannerTrafficButton = styled.fieldset`
  display: grid;
  position: relative;
  grid-template-columns: 244px 244px;
  grid-gap: 84px;
  height: 50px;
  bottom: -12px;
  border: none;
  input {
    display: none;
  }
  input:checked + label {
    border-bottom: 4px solid #ff1d6c;
  }
`;

export const TrafficOption = styled.label`
  width: 100%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  span {
    font-size: 16px;
    font-weight: 400;
    color: #ff1d6c;
  }
`;
