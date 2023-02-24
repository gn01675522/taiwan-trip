import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import FoodCard from "../foodCard/foodCard.component";

import { FoodListLayout } from "./popularFoodList.styles";

import { selectFoodList } from "../../store/food/food.selector";

const PopularFoodList = () => {
  const popularFood = useSelector(selectFoodList);

  return (
    <ListBlock topicType="food">
      <FoodListLayout>
        {popularFood.map((food) => (
          <FoodCard key={food.RestaurantID} foodDetail={food} />
        ))}
      </FoodListLayout>
    </ListBlock>
  );
};

export default PopularFoodList;
