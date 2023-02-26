import { useDispatch } from "react-redux";
import { ReactComponent as PinkLocation } from "../../assets/svg/pinkLocation.svg";

import ShadowCard from "../UI/shadowCard/shadowCard.component";

import {
  HotelCardOutline,
  HotelImage,
  HotelLocation,
  HotelArea,
} from "./hotelCard.styles";

import { setModalData, setModalOpen } from "../../store/detail/detail.actions";

const HotelCard = ({ hotelDetail }) => {
  const dispatch = useDispatch();
  const { title, address, picture } = hotelDetail;

  const reduceAddress = address.slice(0, 6);

  const onShowDetail = () => {
    dispatch(setModalData(hotelDetail));
    dispatch(setModalOpen(true));
  };

  return (
    <ShadowCard $contentType="sm-list" $pageType="hotel" onClick={onShowDetail}>
      <HotelCardOutline>
        <HotelImage imageUrl={picture.PictureUrl1} />
        <HotelLocation>{title}</HotelLocation>
        <HotelArea>
          <PinkLocation />
          {reduceAddress}
        </HotelArea>
      </HotelCardOutline>
    </ShadowCard>
  );
};

export default HotelCard;
