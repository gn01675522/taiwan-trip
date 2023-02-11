import Banner from "../../components/banner/banner.component";
import PopularCityList from "../../components/popularCityList/popularCityList.component";
import PopularEventList from "../../components/popularEventList/popularEventList.component";
import PopularFoodList from "../../components/popularFoodList/popularFoodList.component";
import Container from "../../components/UI/container/container.component";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <PopularCityList />
        <PopularEventList />
        <PopularFoodList />
      </Container>
    </>
  );
};

export default Home;
