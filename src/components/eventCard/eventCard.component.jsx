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

const EventCard = ({ temp }) => {
  const dispatch = useDispatch();

  const onShowDetail = () => {
    dispatch(setModalOpen(true));
  };

  return (
    <EventCardOutline>
      <EventImage />
      <EventContent>
        <EventContentHeader>
          合歡山國際暗空公園-星空清淨跨年活動
        </EventContentHeader>
        <EventContentBody>
          南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題，在擁有東南的的...
        </EventContentBody>
        <EventContentFooter>
          <EventLocationInfo>
            <PinkLocationSymbol />
            南投縣仁愛鄉
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
