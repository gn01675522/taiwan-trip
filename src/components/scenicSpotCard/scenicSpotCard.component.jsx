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
  console.log(scenicSpotDetail);
  const dispatch = useDispatch();
  const {
    ScenicSpotName: Title,
    Address,
    DescriptionDetail: Description,
    City: Location,
    Picture,
    Phone,
    OpenTime: Cycle,
  } = scenicSpotDetail;
  // const reduceAddress = Address.slice(0, 6);

  // const onShowDetail = () => {
  //   dispatch(
  //     setModalData({
  //       Title,
  //       Address,
  //       Description,
  //       Location,
  //       Picture,
  //       Phone,
  //       Cycle,
  //     })
  //   );
  //   dispatch(setModalOpen(true));
  // };

  return (
    <ShadowCard $contentType="sm-list" $pageType="food">
      <ScenicSpotCardOutline>
        <ScenicSpotImage
          imageUrl={
            Picture
              ? Picture.PictureUrl1
              : "../../assets/picture/cantFindImg.jpg"
          }
        />
        <ScenicSpotLocation>{Title}</ScenicSpotLocation>
        <ScenicSpotArea>
          <PinkLocation />
          {Location}
        </ScenicSpotArea>
      </ScenicSpotCardOutline>
    </ShadowCard>
  );
};

export default ScenicSpotCard;
