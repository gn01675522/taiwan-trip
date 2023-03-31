import styled from "styled-components";

import { screenWide } from "../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

export const FormContainer = styled.form`
  display: grid;
  width: 100%;
  grid-template-rows: 40px;
  grid-template-columns: 1fr;
  grid-template-areas: "div";
  grid-gap: 6px;
  justify-content: center;
  z-index: 990;
  @media screen and (min-width: ${pad}) {
    width: 55%;
    grid-template-rows: repeat(2, 40px);
    grid-template-areas:
      "input"
      "div";
    ${({ $pageType }) => {
      switch ($pageType) {
        case "traffic":
          return `
          width: 45%;
          grid-template-rows: 40px;
          grid-template-columns: 1fr;
          grid-template-areas: 
            "div"
          ;
          height: min-content;
        `;
        default:
          return;
      }
    }}
  }
  @media screen and (min-width: ${pc}) {
    width: 100%;
    ${({ $pageType }) => {
      switch ($pageType) {
        case "traffic":
          return `
          width: 45%;
        `;
        default:
          return;
      }
    }}
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 6px;
  grid-area: input;
  padding: 8.5px 24px;
  font-size: 16px;
  line-height: 40px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #d2d2d2;
    font-family: "Noto Sans TC", sans-serif;
  }
  box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2);
`;

export const SelectBlock = styled.div`
  display: grid;
  width: 100%;
  height: 40px;
  grid-template-columns: repeat(2, 1fr) 40px;
  grid-template-rows: 40px;
  grid-gap: 6px;
  grid-area: div;
  ${({ $pageType }) => {
    switch ($pageType) {
      case "traffic":
        return `
        @media screen and (min-width: ${pad}){
            grid-template-columns: 1fr 1fr;
        }
        @media screen and (min-width: ${pc}) {
          grid-template-columns: repeat(2, 1fr) 40px;
          }
        `;
      default:
        return;
    }
  }}
`;
