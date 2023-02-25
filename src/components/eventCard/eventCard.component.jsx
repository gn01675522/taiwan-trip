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
} from "./eventCard.styles";

import { setModalData, setModalOpen } from "../../store/detail/detail.actions";

const EventCard = ({ eventDetail }) => {
  const dispatch = useDispatch();
  const { Title, Description, Location, Picture } = eventDetail;

  const onShowDetail = () => {
    dispatch(setModalData(eventDetail));
    dispatch(setModalOpen(true));
  };

  return (
    <ShadowCard $contentType="me-list" $pageType="event">
      <EventCardOutline>
        <EventImage imgUrl={Picture.PictureUrl1} />
        <EventContent>
          <EventContentHeader>{Title}</EventContentHeader>
          <EventContentBody>{Description}</EventContentBody>
          <EventContentFooter>
            <EventLocationInfo>
              <PinkLocationSymbol />
              {Location}
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

export default EventCard;
