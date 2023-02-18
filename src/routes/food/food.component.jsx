import Banner from "../../components/banner/banner.component";
import Container from "../../components/UI/container/container.component";
import PopularFoodList from "../../components/popularFoodList/popularFoodList.component";
import PopularHotelList from "../../components/popularHotelList/popularHotelList.component";
import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

import { useContext } from "react";
import { HotelContext } from "../../contexts/hotel.context";

const Food = () => {
  const { popularHotel } = useContext(HotelContext);
  console.log("hotel info", popularHotel);
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
