//* which use this：
//* 1. listContent.component.jsx

import { useState, useEffect } from "react";
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
  const [isPcScreen, setIsPcScreen] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { title, description, location, picture } = dataDetail;

  const onShowDetail = () => {
    dispatch(setModalData(dataDetail));
    dispatch(setModalOpen(true));
  };

  useEffect(() => {
    const screenWideChange = () => {
      setIsPcScreen(window.innerWidth);
    };
    window.addEventListener("resize", screenWideChange);
    return () => {
      window.removeEventListener("resize", screenWideChange);
    };
  }, [isPcScreen]);

  return (
    <ShadowCard
      $contentType="hotEvent"
      $pageType="event"
      onClick={isPcScreen < 1024 ? onShowDetail : undefined}
    >
      <EventCardOutline>
        <EventImage imgUrl={picture.PictureUrl1} />
        <EventContent>
          <EventContentHeader>{title}</EventContentHeader>
          {isPcScreen >= 1024 && (
            <EventContentBody>{description}</EventContentBody>
          )}
          <EventContentFooter>
            <EventLocationInfo>
              <PinkLocationSymbol />
              {location}
            </EventLocationInfo>
            {isPcScreen >= 1024 && (
              <Button
                buttonType={BUTTON_TYPE_CLASSES.detail}
                onClick={onShowDetail}
              >
                活動詳情
              </Button>
            )}
          </EventContentFooter>
        </EventContent>
      </EventCardOutline>
    </ShadowCard>
  );
};

export default LargeEventCard;
