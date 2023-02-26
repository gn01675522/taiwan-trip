import styled from "styled-components";
import cantFindImg from "../../assets/picture/cantFindImg.jpg";

export const DetailPhoto = styled.div`
  width: 100%;
  height: 356px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ img }) =>
    img ? `url(${img});` : `url(${cantFindImg});`};
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 32px;
  gap: 18px;
`;

export const EventTitleBlock = styled.div`
  width: 100%;
  height: 26px;
  line-height: 26px;
  font-size: 18px;
  font-weight: 600;
  color: #0d0b0c;
`;

export const EventContentBlock = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #0d0b0c;
`;

export const EventInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 58% 34%;
  width: 100%;
  grid-gap: 41px;
  justify-content: space-between;
`;

export const EventLocationBlock = styled(EventInfoBlock)`
  height: fit-content;
`;

export const EventInfoContent = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: fit-content;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  align-items: center;
  color: #0d0b0c;
  text-align: start;
`;
