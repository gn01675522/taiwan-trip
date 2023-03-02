import { useDispatch } from "react-redux";

import { ReactComponent as PinkLocation } from "../../assets/svg/pinkLocation.svg";

import ShadowCard from "../UI/shadowCard/shadowCard.component";

import {
  ContentCardOutline,
  ContentImage,
  ContentTitle,
  ContentLocation,
} from "./contentCard.styles";

import { setModalData, setModalOpen } from "../../store/detail/detail.actions";

const ContentCard = ({ dataDetail, topicType }) => {
  const dispatch = useDispatch();
  const { title, location, picture } = dataDetail;

  const onShowDetail = () => {
    dispatch(setModalData(dataDetail));
    dispatch(setModalOpen(true));
  };

  return (
    <ShadowCard
      $contentType="sm-list"
      $pageType={topicType}
      onClick={onShowDetail}
    >
      <ContentCardOutline>
        <ContentImage
          imageUrl={
            picture
              ? picture.PictureUrl1
              : "../../assets/picture/cantFindImg.jpg"
          }
        />
        <ContentTitle>{title}</ContentTitle>
        <ContentLocation>
          <PinkLocation />
          {location}
        </ContentLocation>
      </ContentCardOutline>
    </ShadowCard>
  );
};

export default ContentCard;
