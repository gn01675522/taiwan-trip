import Banner from "../../components/banner/banner.component";
import Container from "../../components/UI/container/container.component";
import PopularFoodList from "../../components/popularFoodList/popularFoodList.component";
import PopularHotelList from "../../components/popularHotelList/popularHotelList.component";
import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

const Food = () => {
  return (
    <>
      <Banner pageType={PAGE_TYPE.food} />
      <Container pageType={PAGE_TYPE.food}>
        <PopularFoodList />
        <PopularHotelList />
      </Container>
    </>
  );
};

export default Food;
