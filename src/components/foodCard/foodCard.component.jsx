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
  const { title, address, picture } = foodDetail;
  const reduceAddress = address.slice(0, 6);

  const onShowDetail = () => {
    dispatch(setModalData(foodDetail));
    dispatch(setModalOpen(true));
  };

  return (
    <ShadowCard $contentType="sm-list" $pageType="food" onClick={onShowDetail}>
      <FoodCardOutline>
        <FoodImage
          imageUrl={
            picture
              ? picture.PictureUrl1
              : "../../assets/picture/cantFindImg.jpg"
          }
        />
        <FoodLocation>{title}</FoodLocation>
        <FoodArea>
          <PinkLocation />
          {reduceAddress}
        </FoodArea>
      </FoodCardOutline>
    </ShadowCard>
  );
};

export default FoodCard;
