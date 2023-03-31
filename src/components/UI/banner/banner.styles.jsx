import styled from "styled-components";
import { Shadow } from "../svgToComponent/svgToComponent.styles";

import { screenWide } from "../../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

export const BannerOutline = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  top: 120;
  height: min-content;
  background: white;
  padding: 12px 16px 19px 19px;
  justify-content: center;
  align-items: center;
  z-index: 998;
  @media screen and (min-width: ${pad}) {
    position: relative;
    z-index: 100;
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
  position: fixed;
  width: 90%;
  margin: 0 5%;
  top: 145px;
  z-index: 997;
  @media screen and (min-width: ${pad}) {
    display: none;
  }
`;

export const Blocker = styled.div`
  height: 71px;
`;
