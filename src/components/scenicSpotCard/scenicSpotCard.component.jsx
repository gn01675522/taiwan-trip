import { useDispatch } from "react-redux";

import { ReactComponent as PinkLocation } from "../../assets/svg/pinkLocation.svg";

import ShadowCard from "../UI/shadowCard/shadowCard.component";

import {
  ScenicSpotCardOutline,
  ScenicSpotImage,
  ScenicSpotLocation,
  ScenicSpotArea,
} from "./scenicSpotCard.styles";

import { setModalData, setModalOpen } from "../../store/detail/detail.actions";

const ScenicSpotCard = ({ scenicSpotDetail }) => {
  const dispatch = useDispatch();
  const { title, location, picture } = scenicSpotDetail;
  // const reduceAddress = Address.slice(0, 6);

  const onShowDetail = () => {
    dispatch(setModalData(scenicSpotDetail));
    dispatch(setModalOpen(true));
  };

  return (
    <ShadowCard $contentType="sm-list" $pageType="food" onClick={onShowDetail}>
      <ScenicSpotCardOutline>
        <ScenicSpotImage imageUrl={picture.PictureUrl1} />
        <ScenicSpotLocation>{title}</ScenicSpotLocation>
        <ScenicSpotArea>
          <PinkLocation />
          {location}
        </ScenicSpotArea>
      </ScenicSpotCardOutline>
    </ShadowCard>
  );
};

export default ScenicSpotCard;
