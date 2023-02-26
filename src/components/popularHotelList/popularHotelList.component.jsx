import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import HotelCard from "../hotelCard/hotelCard.component";

import { HotelListLayout } from "./popularHotelList.styles";

import { selectHotelListMap } from "../../store/hotel/hotel.selector.js";

const PopularHotelList = () => {
  const popularHotel = useSelector(selectHotelListMap);

  return (
    <ListBlock topicType="hotel">
      <HotelListLayout>
        {popularHotel.map((hotel) => (
          <HotelCard key={hotel.id} hotelDetail={hotel} />
        ))}
      </HotelListLayout>
    </ListBlock>
  );
};

export default PopularHotelList;
