import styled from "styled-components";

export const EventCardOutline = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

export const EventImage = styled.div`
  width: 38%;
  height: 100%;
  background-color: purple;
`;

export const EventContent = styled.div`
  display: grid;
  grid-template-rows: 23px auto 40px;
  grid-gap: 14px;
  width: 58%;
  height: 100%;
`;

export const EventContentHeader = styled.h5`
  line-height: 23px;
  font-size: 16px;
  font-weight: 400;
`;

export const EventContentBody = styled.div`
  font-size: 14px;
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
