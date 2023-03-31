import styled from "styled-components";
import cantFindImg from "../../assets/picture/cantFindImg.jpg";
import { screenWide } from "../../dummy_data/DUMMY_DATA";

const { pc } = screenWide;

export const ContentCardOutline = styled.div`
  display: grid;
  grid-template-rows: 96px 42px 16px;
  gap: 5px;
  width: 100%;
  height: 100%;
  @media screen and (min-width: ${pc}) {
    grid-template-rows: 137px 42px 16px;
    grid-gap: 10px;
  }
`;

export const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) =>
    imageUrl ? `url(${imageUrl})` : `url(${cantFindImg})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const ContentTitle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #0d0b0c;
`;

export const ContentLocation = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 300;
  color: #007350;
`;
