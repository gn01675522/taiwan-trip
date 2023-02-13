import styled from "styled-components";

export const DetailPhoto = styled.div`
  width: 100%;
  height: 356px;
  background-color: purple;
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
  height: 22px;
  grid-gap: 41px;
  justify-content: space-between;
`;

export const EventBusinessHoursAndCharge = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  align-items: center;
  color: #0d0b0c;
`;

export const EventLocationBlock = styled(EventInfoBlock)`
  height: 32px;
`;

export const EventLocationAndTel = styled(EventBusinessHoursAndCharge)`
  line-height: 32px;
`;
