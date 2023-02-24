import { useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";

import { ReactComponent as Clock } from "../../assets/svg/clockSymbol.svg";
import { ReactComponent as Ticket } from "../../assets/svg/ticketSymbol.svg";
import { ReactComponent as PinkLocation } from "../../assets/svg/pinkLocation.svg";
import { ReactComponent as Tel } from "../../assets/svg/telSymbol.svg";

import {
  DetailPhoto,
  ButtonBlock,
  EventTitleBlock,
  EventContentBlock,
  EventInfoBlock,
  EventBusinessHoursAndCharge,
  EventLocationBlock,
  EventLocationAndTel,
} from "./detailContent.styles";

import { selectModalData } from "../../store/detail/detail.selector";

const DetailContent = () => {
  const {
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
  } = useSelector(selectModalData);

  const startTime = StartTime ? StartTime.slice(0, 10) : "";
  const endTime = EndTime ? EndTime.slice(0, 10) : "";

  console.log(StartTime, EndTime);

  return (
    <>
      <DetailPhoto img={Picture.PictureUrl1} />
      <ButtonBlock>
        <Button buttonType={BUTTON_TYPE_CLASSES.previous} />
        <Button buttonType={BUTTON_TYPE_CLASSES.next} />
      </ButtonBlock>
      <EventTitleBlock>{Title}</EventTitleBlock>
      <EventContentBlock>{Description}</EventContentBlock>
      <EventInfoBlock>
        <EventBusinessHoursAndCharge>
          <Clock />
          {Cycle ? Cycle : `${startTime} 至 ${endTime}`}
        </EventBusinessHoursAndCharge>
        <EventBusinessHoursAndCharge>
          <Ticket />
          {Charge ? Charge : "資料來源無提供票價"}
        </EventBusinessHoursAndCharge>
      </EventInfoBlock>
      <EventLocationBlock>
        <EventLocationAndTel>
          <PinkLocation />
          {Location + Address}
        </EventLocationAndTel>
        <EventLocationAndTel>
          <Tel />
          {Phone ? Phone : "資料來源無提供聯絡方式"}
        </EventLocationAndTel>
      </EventLocationBlock>
    </>
  );
};

export default DetailContent;
