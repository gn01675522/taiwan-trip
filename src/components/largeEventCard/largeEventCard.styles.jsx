import styled from "styled-components";
import cantFindImg from "../../assets/picture/cantFindImg.jpg";

export const EventCardOutline = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

export const EventImage = styled.img`
  width: 38%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: ${({ imgUrl }) =>
    imgUrl ? `url(${imgUrl})` : `url(${cantFindImg})`};
`;

export const EventContent = styled.div`
  display: grid;
  grid-template-rows: 23px auto 40px;
  grid-gap: 14px;
  width: 58%;
  height: 100%;
`;

export const EventContentHeader = styled.h5`
  font-size: 16px;
  font-weight: 400;
  color: #0d0b0c;
`;

export const EventContentBody = styled.div`
  display: -webkit-box;
  font-size: 14px;
  color: #acacac;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
`;

export const EventContentFooter = styled.div`
  display: flex;
  gap: 27px;
  justify-content: space-between;
  align-items: center;
`;

export const EventLocationInfo = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 2px;
`;
