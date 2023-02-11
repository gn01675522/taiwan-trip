import ModalPortal from "../UI/modal/modalPortal.component";
import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";
import { ReactComponent as Clock } from "../../assets/svg/clockSymbol.svg";
import { ReactComponent as Ticket } from "../../assets/svg/ticketSymbol.svg";
import { ReactComponent as PinkLocation } from "../../assets/svg/pinkLocation.svg";
import { ReactComponent as Tel } from "../../assets/svg/telSymbol.svg";

import {
  DetailCardOutline,
  DetailPhoto,
  ButtonBlock,
  EventTitleBlock,
  EventContentBlock,
  EventInfoBlock,
  EventBusinessHoursAndCharge,
  EventLocationBlock,
  EventLocationAndTel,
} from "./detail.styles";

const Detail = () => {
  return (
    <ModalPortal>
      <DetailCardOutline>
        <DetailPhoto />
        <ButtonBlock>
          <Button $buttonType={BUTTON_TYPE_CLASSES.previous} />
          <Button $buttonType={BUTTON_TYPE_CLASSES.next} />
        </ButtonBlock>
        <EventTitleBlock>合歡山國際暗空公園-星空清淨跨年活動</EventTitleBlock>
        <EventContentBlock>
          南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，
          今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，
          在擁有東南亞區最佳的星空觀測環境。奇特造型，值得深入觀賞體會。
        </EventContentBlock>
        <EventInfoBlock>
          <EventBusinessHoursAndCharge>
            <Clock />
            開放式空間，無時間限制
          </EventBusinessHoursAndCharge>
          <EventBusinessHoursAndCharge>
            <Ticket />
            免費
          </EventBusinessHoursAndCharge>
        </EventInfoBlock>
        <EventLocationBlock>
          <EventLocationAndTel>
            <PinkLocation />
            基隆市中山區湖海路一、二段(協和街)
          </EventLocationAndTel>
          <EventLocationAndTel>
            <Tel />
            886-2-24287664
          </EventLocationAndTel>
        </EventLocationBlock>
      </DetailCardOutline>
    </ModalPortal>
  );
};

export default Detail;
