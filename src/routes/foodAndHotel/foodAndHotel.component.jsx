import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Banner from "../../components/banner/banner.component";
import Container from "../../components/UI/container/container.component";
import PopularFoodList from "../../components/popularFoodList/popularFoodList.component";
import PopularHotelList from "../../components/popularHotelList/popularHotelList.component";

import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

import { fetchFoodListAsync } from "../../store/food/food.actions";
import { fetchHotelListAsync } from "../../store/hotel/hotel.actions";

const FoodAndHotel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodListAsync());
    dispatch(fetchHotelListAsync());
  }, []);

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

export default FoodAndHotel;
