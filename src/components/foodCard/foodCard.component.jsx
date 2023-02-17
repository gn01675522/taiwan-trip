import { ReactComponent as PinkLocation } from "../../assets/svg/pinkLocation.svg";

import {
  FoodCardOutline,
  FoodImage,
  FoodLocation,
  FoodArea,
} from "./foodCard.styles";

const FoodCard = ({ foodDetail }) => {
  console.log(foodDetail);
  const { RestaurantName, Address } = foodDetail;
  const reduceAddress = Address.slice(0,6)
  console.log(Address.length)

  return (
    <FoodCardOutline>
      <FoodImage />
      <FoodLocation>{RestaurantName}</FoodLocation>
      <FoodArea>
        <PinkLocation />
        {reduceAddress}
      </FoodArea>
    </FoodCardOutline>
  );
};

export default FoodCard;
