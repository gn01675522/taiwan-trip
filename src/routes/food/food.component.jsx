import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../../components/banner/banner.component";
import Container from "../../components/UI/container/container.component";

import FoodList from "../../components/foodList/foodList.component";

import { PAGE_TYPE } from "../../dummy_data/DUMMY_DATA";

import { fetchFoodListAsync } from "../../store/food/food.actions";
import { selectSearchKeyword } from "../../store/search/search.selector";

const Food = () => {
  const { county } = useParams();
  const dispatch = useDispatch();
  const keyword = useSelector(selectSearchKeyword);

  useEffect(() => {
    dispatch(fetchFoodListAsync(keyword, county));
  }, [county, keyword]);

  return (
    <>
      <Banner pageType={PAGE_TYPE.food} />
      <Container pageType={PAGE_TYPE.food}>
        <FoodList />
      </Container>
    </>
  );
};

export default Food;
