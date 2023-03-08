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
