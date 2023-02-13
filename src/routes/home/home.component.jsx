import Banner from "../../components/banner/banner.component";
import PopularCityList from "../../components/popularCityList/popularCityList.component";
import PopularEventList from "../../components/popularEventList/popularEventList.component";
import PopularFoodList from "../../components/popularFoodList/popularFoodList.component";
import Container from "../../components/UI/container/container.component";
import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

const Home = () => {
  return (
    <>
      <Banner pageType={PAGE_TYPE.home} />
      <Container pageType={PAGE_TYPE.home}>
        <PopularCityList />
        <PopularEventList />
        <PopularFoodList />
      </Container>
    </>
  );
};

export default Home;
