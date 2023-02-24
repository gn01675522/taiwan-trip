import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import HotelCard from "../hotelCard/hotelCard.component";

import { HotelListLayout } from "./popularHotelList.styles";

import { selectHotelList } from "../../store/hotel/hotel.selector.js";

const PopularHotelList = () => {
  const popularHotel = useSelector(selectHotelList);

  return (
    <ListBlock topicType="hotel">
      <HotelListLayout>
        {popularHotel.map((hotel) => (
          <HotelCard key={hotel.HotelID} hotelDetail={hotel} />
        ))}
      </HotelListLayout>
    </ListBlock>
  );
};

export default PopularHotelList;
