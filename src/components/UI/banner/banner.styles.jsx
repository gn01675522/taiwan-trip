import styled from "styled-components";
import { Shadow } from "../svgToComponent/svgToComponent.styles";

import { screenWide } from "../../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

export const BannerOutline = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 100;
  ${({ $pageType }) => {
    switch ($pageType) {
      case "traffic":
        return `height:170px;`;
      default:
        return `
          height: 536px;
          @media screen and (max-width: ${pc}) {
            height: min-content;
            background: #F6F7FB;
            padding: 24px 0 35px 0;
          }
          @media screen and (max-width: ${pad}) {
            height: min-content;
            background: white;
            padding: 12px 16px 19px 19px;
          }
        `;
    }
  }}
`;

export const ButtomShadow = styled(Shadow)`
  width: 97%;
  margin: 0 1.5%;
  top: 150px;
  @media screen and (min-width: ${pc}), screen and (min-width: ${pad}) {
    display: none;
  }
`;
