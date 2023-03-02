//* which use this：
//* 1. home.component.jsx
//* 2. event.component.jsx
//* 3. food.component.jsx
//* 4. foodAndHotel.component.jsx
//* 5. hotel.component.jsx
//* 6. scenicSpot.component.jsx

import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import ContentCard from "../contentCard/contentCard.component";
import LargeEventCard from "../largeEventCard/largeEventCard.component";

import { ListContentLayout } from "./listContent.styles";

import { selectEventListMap } from "../../store/event/event.selector";
import { selectFoodListMap } from "../../store/food/food.selector";
import { selectHotelListMap } from "../../store/hotel/hotel.selector";
import { selectScenicSpotListMap } from "../../store/scenicSpot/scenicSpot.selector";

const CONTENT_CLASSES = {
  event: "event",
  hotEvent: "hotEvent",
  food: "food",
  hotel: "hotel",
  scenicSpot: "scenicSpot",
};

const getContent = (topic) =>
  ({
    [CONTENT_CLASSES.event]: selectEventListMap,
    [CONTENT_CLASSES.hotEvent]: selectEventListMap,
    [CONTENT_CLASSES.food]: selectFoodListMap,
    [CONTENT_CLASSES.hotel]: selectHotelListMap,
    [CONTENT_CLASSES.scenicSpot]: selectScenicSpotListMap,
  }[topic]);

const ListContent = ({ topic, county }) => {
  const contentType = getContent(topic);
  const contentData = useSelector(contentType);

  return (
    <ListBlock topicType={topic} county={county}>
      <ListContentLayout topicType={topic}>
        {contentData.map((data) =>
          topic === "hotEvent" ? (
            <LargeEventCard key={data.id} dataDetail={data} />
          ) : (
            <ContentCard key={data.id} dataDetail={data} topicType={topic} />
          )
        )}
      </ListContentLayout>
    </ListBlock>
  );
};

export default ListContent;
