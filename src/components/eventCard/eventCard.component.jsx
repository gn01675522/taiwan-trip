import { useDispatch } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";
import { ReactComponent as PinkLocationSymbol } from "../../assets/svg/pinkLocation.svg";

import { setModalOpen } from "../../store/detail/detail.actions";

import {
  EventCardOutline,
  EventImage,
  EventContent,
  EventContentHeader,
  EventContentBody,
  EventContentFooter,
  EventLocationInfo,
} from "./eventCard.styles";

const EventCard = ({ eventDetail }) => {
  const dispatch = useDispatch();
  const { ActivityName, Description, Location, Picture } = eventDetail;

  const onShowDetail = () => {
    dispatch(setModalOpen(true));
  };

  return (
    <EventCardOutline>
      <EventImage imgUrl={Picture.PictureUrl1} />
      <EventContent>
        <EventContentHeader>{ActivityName}</EventContentHeader>
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
  );
};

export default EventCard;
