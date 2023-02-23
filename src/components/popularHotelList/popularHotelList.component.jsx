import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import ShadowCard from "../UI/shadowCard/shadowCard.component";
import HotelCard from "../hotelCard/hotelCard.component";

import { HotelListLayout } from "./popularHotelList.styles";

import { selectHotelList } from "../../store/hotel/hotel.selector.js";

const PopularHotelList = () => {
  const popularHotel = useSelector(selectHotelList);

  return (
    <ListBlock topicType="hotel">
      <HotelListLayout>
        {popularHotel.map((hotel) => {
          return (
            <ShadowCard
              key={hotel.HotelID}
              $contentType="sm-list"
              $pageType="hotel"
            >
              <HotelCard hotelDetail={hotel} />
            </ShadowCard>
          );
        })}
      </HotelListLayout>
    </ListBlock>
  );
};

export default PopularHotelList;
