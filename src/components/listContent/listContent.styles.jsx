import styled from "styled-components";
import { screenWide } from "../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

export const ListContentLayout = styled.div`
  ${({ topicType }) => {
    switch (topicType) {
      case "hotEvent":
        return `
          display: grid;
          grid-template-rows: repeat(4, 120px);
          grid-template-columns: auto;
          grid-gap: 15px;
          @media screen and (min-width: ${pad}) {
            grid-template-rows: repeat(2, 120px);
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 15px 3vw;
          }
          @media screen and (min-width: ${pc}) {
            grid-template-rows: repeat(2, 252px);
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 47px 21px;
          }
        `;
      case "hotFood":
      case "event":
      case "food":
      case "hotel":
      case "scenicSpot":
        return `
          display: grid;
          grid-template-rows: repeat(auto-fit, 188px);
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 19px 4px;
          @media screen and (min-width: ${pad}) {
            grid-template-rows: repeat(2, 188px);
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 26px 12px;
          }
          @media screen and (min-width: ${pc}) {
            grid-template-rows: repeat(2, 269px);
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 35px 9px;
          }
          `;
      default:
        throw new Error`Unhandle type of ${topicType}, in listContent`();
    }
  }}
`;
