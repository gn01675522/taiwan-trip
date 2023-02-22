import { useContext } from "react";

import ListBlock from "../UI/listBlock/listBlock.component";
import ShadowCard from "../UI/shadowCard/shadowCard.component";
import FoodCard from "../foodCard/foodCard.component";

import { FoodListLayout } from "./popularFoodList.styles";

import { FoodContext } from "../../contexts/food.context";

const PopularFoodList = () => {
  const { popularFood } = useContext(FoodContext);

  return (
    <ListBlock topicType="food">
      <FoodListLayout>
        {popularFood.map((food) => {
          return (
            <ShadowCard
              key={food.RestaurantID}
              $contentType="sm-list"
              $pageType="food"
            >
              <FoodCard foodDetail={food} />
            </ShadowCard>
          );
        })}
      </FoodListLayout>
    </ListBlock>
  );
};

export default PopularFoodList;
