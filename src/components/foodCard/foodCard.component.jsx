import { useDispatch } from "react-redux";

import { ReactComponent as PinkLocation } from "../../assets/svg/pinkLocation.svg";

import ShadowCard from "../UI/shadowCard/shadowCard.component";

import {
  FoodCardOutline,
  FoodImage,
  FoodLocation,
  FoodArea,
} from "./foodCard.styles";

import { setModalData, setModalOpen } from "../../store/detail/detail.actions";

const FoodCard = ({ foodDetail }) => {
  const dispatch = useDispatch();
  const {
    RestaurantName: Title,
    Address,
    Description,
    City: Location,
    Picture,
    Phone,
    OpenTime: Cycle,
  } = foodDetail;
  const reduceAddress = Address.slice(0, 6);

  console.log(foodDetail.opentTime);

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
    <ShadowCard $contentType="sm-list" $pageType="food" onClick={onShowDetail}>
      <FoodCardOutline>
        <FoodImage
          imageUrl={
            Picture
              ? Picture.PictureUrl1
              : "../../assets/picture/cantFindImg.jpg"
          }
        />
        <FoodLocation>{Title}</FoodLocation>
        <FoodArea>
          <PinkLocation />
          {reduceAddress}
        </FoodArea>
      </FoodCardOutline>
    </ShadowCard>
  );
};

export default FoodCard;
