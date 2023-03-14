//* which use this：
//* 1. listContent.component.jsx

import { useDispatch } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";
import { ReactComponent as PinkLocationSymbol } from "../../assets/svg/pinkLocation.svg";

import ShadowCard from "../UI/shadowCard/shadowCard.component";

import {
  EventCardOutline,
  EventImage,
  EventContent,
  EventContentHeader,
  EventContentBody,
  EventContentFooter,
  EventLocationInfo,
} from "./largeEventCard.styles";

import { setModalData, setModalOpen } from "../../store/detail/detail.actions";

const LargeEventCard = ({ dataDetail }) => {
  const dispatch = useDispatch();
  const { title, description, location, picture } = dataDetail;

  const onShowDetail = () => {
    dispatch(setModalData(dataDetail));
    dispatch(setModalOpen(true));
  };

  return (
    <ShadowCard $contentType="hotEvent" $pageType="event">
      <EventCardOutline>
        <EventImage imgUrl={picture.PictureUrl1} />
        <EventContent>
          <EventContentHeader>{title}</EventContentHeader>
          <EventContentBody>{description}</EventContentBody>
          <EventContentFooter>
            <EventLocationInfo>
              <PinkLocationSymbol />
              {location}
            </EventLocationInfo>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.detail}
              onClick={onShowDetail}
            >
              活動詳情
            </Button>
          </EventContentFooter>
        </EventContent>
      </EventCardOutline>
    </ShadowCard>
  );
};

export default LargeEventCard;
