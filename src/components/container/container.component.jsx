import PopularCityList from "../popularCityList/popularCityList.component";
import PopularEventList from "../popularEventList/popularEventList.component";
import PopularFoodList from "../popularFoodList/popularFoodList.component";
import { ContainerOutline } from "./container.styles";

const Container = () => {
  return (
    <ContainerOutline>
      <PopularCityList />
      <PopularEventList />
      <PopularFoodList />
    </ContainerOutline>
  );
};

export default Container;
