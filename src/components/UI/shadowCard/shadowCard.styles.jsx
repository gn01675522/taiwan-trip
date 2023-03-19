import styled from "styled-components";
import { screenWide } from "../../../dummy_data/DUMMY_DATA";
import { Shadow } from "../svgToComponent/svgToComponent.styles";

const { pad, pc } = screenWide;

export const CardOutline = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${({ $pageType }) => {
    switch ($pageType) {
      case "banner":
      case "event":
      case "nav":
        return;
      default:
        return `cursor: pointer;`;
    }
  }}
`;

export const CardContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 23px 27px;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 980;
  ${({ $pageType }) => {
    switch ($pageType) {
      case "banner":
      case "nav":
        return;
      case "traffic":
        return `
          height: 1000px;
        `;
      case "hotEvent":
      case "event":
        return `
          padding: 16px;
        `;
      case "food":
      case "hotel":
      case "scenicSpot":
        return `
          padding: 12px;
        `;
      default:
        throw new Error(
          `Unrecognized type of ${$pageType},
        this message is from shadowCard.styles.jsx's CardContent;
        Please make sure every component what import this has a props passed contentType.`
        );
    }
  }}
`;

export const BottomShadow = styled(Shadow)`
  width: 97%;
  margin: 0 1.5%;
  height: 45px;
  bottom: -18px;
  z-index: 979;
  ${({ $contentType }) => {
    switch ($contentType) {
      case "banner":
        return `
          width: 100%;
          height: 74px;
          margin: 0;
          bottom: -35px;
          @media screen and (max-width: ${pc}) {
            display: none;
          }
        `;
      case "detail":
      case "traffic":
        return `
          height: 52px;
          bottom: -30px;
        `;
      case "hotEvent":
        return `
          height: 45px;
          bottom: -20px;
        `;
      case "food":
        return `
          height: 24px;
          bottom: -15px;
        `;
      default:
        return;
    }
  }}
`;

export const HintText = styled.span`
  position: absolute;
  font-size: 24px;
  font-weight: 400;
  color: #acacac;
  top: 53px;
  left: 56px;
`;
