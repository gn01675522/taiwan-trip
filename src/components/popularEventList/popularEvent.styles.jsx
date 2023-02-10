import styled from "styled-components";

export const EventListLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 252px);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 47px 21px;
`;

export const EventCard = styled.div`
  width: 100%;
  height: 100%;
  outline: 1px solid blue;
`;
