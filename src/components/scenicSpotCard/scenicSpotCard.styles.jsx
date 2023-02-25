import styled from "styled-components";
import cantFindImg from "../../assets/picture/cantFindImg.jpg";

export const ScenicSpotCardOutline = styled.div`
  display: grid;
  grid-template-rows: 137px 42px 16px;
  grid-gap: 10px;
  width: 100%;
  height: 100%;
`;

export const ScenicSpotImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) =>
    imageUrl ? `url(${imageUrl})` : `url(${cantFindImg})`};
`;

export const ScenicSpotLocation = styled.div`
  width: 100%;
  height: 100%;
  line-height: 42px;
  font-size: 14px;
  font-weight: 400;
  color: #0d0b0c;
`;

export const ScenicSpotArea = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 300;
  color: #007350;
`;
