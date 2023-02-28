import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import ScenicSpotCard from "../scenicSpotCard/scenicSpotCard.component";

import { HotelListLayout } from "../popularHotelList/popularHotelList.styles";

import { selectHotelListMap } from "../../store/hotel/hotel.selector";

const HotelList = () => {
  const hotels = useSelector(selectHotelListMap);
  return (
    <ListBlock topicType="city">
      <HotelListLayout>
        {hotels.map((hotel) => (
          <ScenicSpotCard key={hotel.id} scenicSpotDetail={hotel} />
        ))}
      </HotelListLayout>
    </ListBlock>
  );
};

export default HotelList;

//* 暫時使用 scenicSpot Card，未來要將所有給整合在一起
