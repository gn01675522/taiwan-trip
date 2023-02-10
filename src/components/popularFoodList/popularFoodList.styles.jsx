import styled from "styled-components";

export const FoodListLayout = styled.div`
  outline: 1px solid red;
  display: grid;
  grid-template-rows: repeat(2, 269px);
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 9px 9px;
`;

export const FoodCard = styled.div`
  outline: 1px solid blue;
`;
