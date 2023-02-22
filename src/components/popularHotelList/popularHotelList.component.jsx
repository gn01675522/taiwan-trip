import { useContext } from "react";

import ListBlock from "../UI/listBlock/listBlock.component";
import ShadowCard from "../UI/shadowCard/shadowCard.component";
import HotelCard from "../hotelCard/hotelCard.component";

import { HotelListLayout } from "./popularHotelList.styles";

import { HotelContext } from "../../contexts/hotel.context";

const PopularHotelList = () => {
  const { popularHotel } = useContext(HotelContext);

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
