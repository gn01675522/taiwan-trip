import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import FoodCard from "../foodCard/foodCard.component";

import { FoodListLayout } from "./popularFoodList.styles";

import { selectFoodListMap } from "../../store/food/food.selector";

const PopularFoodList = () => {
  const popularFood = useSelector(selectFoodListMap);

  return (
    <ListBlock topicType="food">
      <FoodListLayout>
        {popularFood.map((food) => (
          <FoodCard key={food.Id} foodDetail={food} />
        ))}
      </FoodListLayout>
    </ListBlock>
  );
};

export default PopularFoodList;
