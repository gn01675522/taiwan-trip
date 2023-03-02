import styled from "styled-components";

export const BannerOutline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${({ $pageType }) => {
    switch ($pageType) {
      case "home":
      case "food":
        return `height:536px;`;
      case "traffic":
        return `height:170px;`;
      default:
        return `height: 536px;`;
    }
  }}
`;
