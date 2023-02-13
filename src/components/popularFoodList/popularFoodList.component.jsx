import ListBlock from "../UI/listBlock/listBlock.component";
import ShadowCard from "../UI/shadowCard/shadowCard.component";

import { FoodListLayout, FoodCard } from "./popularFoodList.styles";

const TEMP_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PopularFoodList = () => {
  return (
    <ListBlock topicType="food">
      <FoodListLayout>
        {TEMP_ARRAY.map((temp) => (
          <ShadowCard key={temp} $contentType="sm-list" $pageType="banner">
            <FoodCard>{temp}</FoodCard>
          </ShadowCard>
        ))}
      </FoodListLayout>
    </ListBlock>
  );
};

export default PopularFoodList;
