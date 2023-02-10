import styled from "styled-components";

export const BannerContentLayout = styled.div`
  display: grid;
  position: absolute;
  grid-template-rows: 70px 21px auto;
  grid-gap: 8px;
  margin: 0 auto;
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
