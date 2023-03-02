//* which use this：
//*   1. popularCityList.component.jsx
//*   2. listContent.component.jsx

import {
  BlockOutline,
  ContentTitle,
  TriangleSymbol,
  SquareSymbol,
} from "./listBlock.styles";

import { changeEnTitleToTc } from "../../../utils/component/component.utils";

const TOPIC_TYPE_CLASSES = {
  city: "city",
  scenicSpot: "scenicSpot",
  hotEvent: "hotEvent",
  event: "event",
  food: "food",
  hotel: "hotel",
};

const getTopic = ({ topicType, county }) =>
  ({
    [TOPIC_TYPE_CLASSES.city]: { symbol: TriangleSymbol, topic: "熱門城市" },
    [TOPIC_TYPE_CLASSES.hotEvent]: {
      symbol: TriangleSymbol,
      topic: "熱門活動",
    },
    [TOPIC_TYPE_CLASSES.food]: {
      symbol: SquareSymbol,
      topic: county ? `${changeEnTitleToTc(county).tcTitle}美食` : "熱門餐飲",
    },
    [TOPIC_TYPE_CLASSES.hotel]: {
      symbol: SquareSymbol,
      topic: county ? `${changeEnTitleToTc(county).tcTitle}住宿` : "推薦住宿",
    },
    [TOPIC_TYPE_CLASSES.scenicSpot]: {
      symbol: TriangleSymbol,
      topic: county ? `${changeEnTitleToTc(county).tcTitle}景點` : "熱門景點",
    },
    [TOPIC_TYPE_CLASSES.event]: {
      symbol: TriangleSymbol,
      topic: county ? `${changeEnTitleToTc(county).tcTitle}活動` : "熱門活動",
    },
  }[topicType]);

const ListBlock = ({ children, topicType, county }) => {
  const TopicSymbol = getTopic({ topicType, county }).symbol;
  const TopicTitle = getTopic({ topicType, county }).topic;
  return (
    <BlockOutline>
      <ContentTitle>
        <TopicSymbol />
        {TopicTitle}
      </ContentTitle>
      {children}
    </BlockOutline>
  );
};

export default ListBlock;

//* 首頁：熱門城市紅三角、熱門活動紅三角、熱門餐飲橘方塊
//* 食宿：熱門美食橘方塊、推薦住宿橘方塊
//* 景點：設計稿為景點城市紅三角，但感覺說明不清楚，所以改成{城市}景點紅三角
//* 活動：設計稿無提供，預設為{城市}活動紅三角
//* 食物：設計稿為美食橘方塊，但感覺說明不清楚，所以改成{城市}美食橘方塊
//* 住宿：設計稿為美食住宿橘方塊，但感覺說明不清楚，所以改成{城市}住宿橘方塊
