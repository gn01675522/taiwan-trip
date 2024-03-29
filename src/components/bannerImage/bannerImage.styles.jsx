import styled from "styled-components";
import HomeBannerImg from "../../assets/picture/homeBannerImage.jpg";
import FoodBannerImg from "../../assets/picture/foodBannerImg.jpg";

export const ImageWall = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 40% 50%;
  background-size: cover;
  justify-content: center;
  align-items: center;
  background-image: ${({ $pageType }) => {
    switch ($pageType) {
      case "food":
      case "hotel":
        return `
        url(${FoodBannerImg})
        `;
      case "traffic":
        return `
          url()
          `;
      default:
        return `
          url(${HomeBannerImg})
        `;
    }
  }};
`;
