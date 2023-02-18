import { ReactComponent as PinkLocation } from "../../assets/svg/pinkLocation.svg";

import {
  HotelCardOutline,
  HotelImage,
  HotelLocation,
  HotelArea,
} from "./hotelCard.styles";

const HotelCard = ({ hotelDetail }) => {
  const { HotelName, Address, Picture } = hotelDetail;
  const reduceAddress = Address.slice(0, 6);

  return (
    <HotelCardOutline>
      <HotelImage imageUrl={Picture.PictureUrl1} />
      <HotelLocation>{HotelName}</HotelLocation>
      <HotelArea>
        <PinkLocation />
        {reduceAddress}
      </HotelArea>
    </HotelCardOutline>
  );
};

export default HotelCard;
