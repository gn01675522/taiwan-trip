import Banner from "../../components/banner/banner.component";
import Container from "../../components/UI/container/container.component";
import PopularFoodList from "../../components/popularFoodList/popularFoodList.component";
import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

const Food = () => {
  return (
    <>
      <Banner pageType={PAGE_TYPE.food} />
      <Container pageType={PAGE_TYPE.food}>
        <PopularFoodList />
        <PopularFoodList />
      </Container>
    </>
  );
};

export default Food;
