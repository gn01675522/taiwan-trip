import { ReactComponent as PinkLocation } from "../../assets/svg/pinkLocation.svg";

import {
  FoodCardOutline,
  FoodImage,
  FoodLocation,
  FoodArea,
} from "./foodCard.styles";

const FoodCard = ({ foodDetail }) => {
  const { RestaurantName, Address, Picture } = foodDetail;
  const reduceAddress = Address.slice(0, 6);

  return (
    <FoodCardOutline>
      <FoodImage imageUrl={Picture.PictureUrl1}/>
      <FoodLocation>{RestaurantName}</FoodLocation>
      <FoodArea>
        <PinkLocation />
        {reduceAddress}
      </FoodArea>
    </FoodCardOutline>
  );
};

export default FoodCard;
