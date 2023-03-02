import styled from "styled-components";

export const ListContentLayout = styled.div`
  ${({ topicType }) => {
    switch (topicType) {
      case "hotEvent":
        return `
          display: grid;
          grid-template-rows: repeat(2, 252px);
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 47px 21px;
        `;
      case "hotFood":
        return `
          display: grid;
          grid-template-rows: repeat(2, 269px);
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 35px 9px;
          `;
      case "event":
      case "food":
      case "hotel":
        return `
          display: grid;
          grid-template-rows: repeat(2, 269px);
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 35px 9px;
        `;
      case "scenicSpot":
        return `
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 35px 9px;
          `;
      default:
        throw new Error`Unhandle type of ${topicType}, in listContent`();
    }
  }}
`;
