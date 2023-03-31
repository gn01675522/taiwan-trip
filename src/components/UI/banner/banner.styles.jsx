import styled from "styled-components";
import { Shadow } from "../svgToComponent/svgToComponent.styles";

import { screenWide } from "../../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

export const BannerOutline = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: min-content;
  background: white;
  padding: 12px 16px 19px 19px;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media screen and (min-width: ${pad}) {
    ${({ $pageType }) => {
      switch ($pageType) {
        case "traffic":
          return `
            background: white;
            height: 155px;
            padding-top: 38px;
            align-items: start;
          `;
        default:
          return `
            height: min-content;
            background: #f6f7fb;
            padding: 24px 0 35px 0;
          `;
      }
    }}
  }
  @media screen and (min-width: ${pc}) {
    padding: 0;
    ${({ $pageType }) => {
      switch ($pageType) {
        case "traffic":
          return `
          height: 170px;
        `;
        default:
          return `
          height: 536px;
        `;
      }
    }}
  }
`;

export const BottomShadow = styled(Shadow)`
  width: 90%;
  margin: 0 5%;
  top: 145px;
  z-index: 99;
  @media screen and (min-width: ${pad}) {
    display: none;
  }
`;
