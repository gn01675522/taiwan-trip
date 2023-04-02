//* which use this：
//* 1. detail.component.jsx

import { useState } from "react";
import { useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../UI/button/button.component";

import { ReactComponent as Clock } from "../../assets/svg/clockSymbol.svg";
import { ReactComponent as Ticket } from "../../assets/svg/ticketSymbol.svg";
import { ReactComponent as PinkLocation } from "../../assets/svg/pinkLocation.svg";
import { ReactComponent as Tel } from "../../assets/svg/telSymbol.svg";

import {
  DetailPhoto,
  ButtonBlock,
  ButtonWrap,
  EventTitleBlock,
  EventContentBlock,
  EventInfoBlock,
  EventLocationBlock,
  EventInfoContent,
} from "./detailContent.styles";

import { selectModalData } from "../../store/detail/detail.selector";

const DetailContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, address, description, picture, phone, charge, during } =
    useSelector(selectModalData);

  console.log(picture);

  const pictureAry = Object.values(picture).filter((picture) => {
    return picture.includes("http");
  });
  //* 原始資料中有些會將其他資訊跟 picture 放在一起
  //* 這邊使用 filter 並以 http 當作條件來判斷是否為有效連結

  const onClickToNext = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const onClickToPrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };
  //* 透過按鈕選擇不同圖片的函式f

  return (
    <>
      <DetailPhoto img={pictureAry[currentIndex]} />
      {pictureAry.length > 0 && (
        <ButtonBlock>
          <ButtonWrap>
            {currentIndex > 0 && (
              <Button
                buttonType={BUTTON_TYPE_CLASSES.previous}
                onClick={onClickToPrevious}
              />
            )}
            {currentIndex < pictureAry.length - 1 && (
              <Button
                buttonType={BUTTON_TYPE_CLASSES.next}
                onClick={onClickToNext}
              />
            )}
          </ButtonWrap>
        </ButtonBlock>
      )}
      <EventTitleBlock>{title}</EventTitleBlock>
      <EventContentBlock>{description}</EventContentBlock>
      <EventInfoBlock>
        <EventInfoContent>
          <Clock />
          {during ? during : `請參考說明或官網`}
        </EventInfoContent>
        <EventInfoContent>
          <Ticket />
          {charge ? charge : "資料來源無提供收費標準"}
        </EventInfoContent>
      </EventInfoBlock>
      <EventLocationBlock>
        <EventInfoContent>
          <PinkLocation />
          {address ? address : "資料來源無提供地址"}
        </EventInfoContent>
        <EventInfoContent>
          <Tel />
          {phone ? phone : "資料來源無提供聯絡方式"}
        </EventInfoContent>
      </EventLocationBlock>
    </>
  );
};

export default DetailContent;

//* scenic spot 有的資料會沒有地址，看能不能透過座標來反推地址
