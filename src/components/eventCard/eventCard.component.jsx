import { useDispatch } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";
import { ReactComponent as PinkLocationSymbol } from "../../assets/svg/pinkLocation.svg";

import { setModalData, setModalOpen } from "../../store/detail/detail.actions";

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
  const {
    ActivityName: Title,
    Address,
    Description,
    Location,
    Picture,
    Phone,
    Charge,
    Cycle,
    StartTime,
    EndTime,
  } = eventDetail;
  const dispatch = useDispatch();

  const onShowDetail = () => {
    dispatch(setModalOpen(true));
    dispatch(
      setModalData({
        Title,
        Address,
        Description,
        Location,
        Picture,
        Phone,
        Charge,
        Cycle,
        StartTime,
        EndTime,
      })
    );
  };

  return (
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
  );
};

export default EventCard;
