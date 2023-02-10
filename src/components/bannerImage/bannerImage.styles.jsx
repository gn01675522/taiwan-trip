import bannerImg from "../../assets/picture/bannerImage.jpg";
import styled from "styled-components";

export const ImageWall = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-position: 40% 50%;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;
