import { ReactComponent as PinkLocation } from "../../assets/svg/pinkLocation.svg";

import {
  FoodCardOutline,
  FoodImage,
  FoodLocation,
  FoodArea,
} from "./foodCard.styles";

const FoodCard = () => {
  return (
    <FoodCardOutline>
      <FoodImage />
      <FoodLocation>正濱漁港懷舊碼頭</FoodLocation>
      <FoodArea><PinkLocation/>基隆市中正區</FoodArea>
    </FoodCardOutline>
  );
};

export default FoodCard;
