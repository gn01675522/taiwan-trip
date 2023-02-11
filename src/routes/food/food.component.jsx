import Banner from "../../components/banner/banner.component";
import Container from "../../components/UI/container/container.component";
import PopularFoodList from "../../components/popularFoodList/popularFoodList.component";

const Food = () => {
  return (
    <>
      <Banner $imageType="food" />
      <Container>
        <PopularFoodList />
        <PopularFoodList />
      </Container>
    </>
  );
};

export default Food;
