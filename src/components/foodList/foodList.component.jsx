import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import ScenicSpotCard from "../scenicSpotCard/scenicSpotCard.component";

import { FoodListLayout } from "./foodList.styles";

import { selectFoodListMap } from "../../store/food/food.selector";

const FoodList = () => {
  const foods = useSelector(selectFoodListMap);
  return (
    <ListBlock topicType="city">
      <FoodListLayout>
        {foods.map((food) => (
          <ScenicSpotCard key={food.id} scenicSpotDetail={food} />
        ))}
      </FoodListLayout>
    </ListBlock>
  );
};

export default FoodList;

//* 暫時使用 scenicSpot Card，未來要將所有給整合在一起
