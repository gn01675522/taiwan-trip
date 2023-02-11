import styled from "styled-components";

export const FoodListLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 269px);
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 35px 9px;
`;

export const FoodCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: purple;
  outline: 1px solid blue;
`;
