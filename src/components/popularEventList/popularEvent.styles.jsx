import styled from "styled-components";

export const EventListLayout = styled.div`
  outline: 1px solid red;
  display: grid;
  grid-template-rows: repeat(2, 252px);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px 29px;
`;

export const EventCard = styled.div`
  outline: 1px solid blue;
`;
