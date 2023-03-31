import styled from "styled-components";

export const BannerContentLayout = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  grid-template-rows: 70px 21px auto;
  grid-gap: 8px;
  justify-content: center;
  ${({ $pageType }) => {
    switch ($pageType) {
      case "traffic":
        return `
          display: flex;
          position: static;
          flex-direction: column;
          align-items: center;
        `;
      default:
        return;
    }
  }}
`;
