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
  const {
    HotelName: Title,
    Address,
    Description,
    City: Location,
    Picture,
    Phone,
    OpenTime: Cycle,
  } = hotelDetail;
  const reduceAddress = Address.slice(0, 6);

  const onShowDetail = () => {
    dispatch(
      setModalData({
        Title,
        Address,
        Description,
        Location,
        Picture,
        Phone,
        Cycle,
      })
    );
    dispatch(setModalOpen(true));
  };

  return (
    <ShadowCard $contentType="sm-list" $pageType="hotel" onClick={onShowDetail}>
      <HotelCardOutline>
        <HotelImage imageUrl={Picture.PictureUrl1} />
        <HotelLocation>{Title}</HotelLocation>
        <HotelArea>
          <PinkLocation />
          {reduceAddress}
        </HotelArea>
      </HotelCardOutline>
    </ShadowCard>
  );
};

export default HotelCard;
