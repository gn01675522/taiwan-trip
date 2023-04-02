import styled from "styled-components";
import cantFindImg from "../../assets/picture/cantFindImg.jpg";
import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";

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
`;

export const ButtonWrap = styled.div`
  display: grid;
  width: max-content;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18px;
  grid-template-areas: "previous next";
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
  width: 100%;
  grid-template-columns: 58% 34%;
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
