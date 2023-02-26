//* which use this：
//*   1. popularCityList.component.jsx
//*   2. popularEventList.component.jsx
//*   3. popularFoodList.component.jsx

import {
  BlockOutline,
  ContentTitle,
  TriangleSymbol,
  SquareSymbol,
} from "./listBlock.styles";

const TOPIC_TYPE_CLASSES = {
  city: "city",
  event: "event",
  food: "food",
  hotel: "hotel",
};

const getTopic = (topicType) =>
  ({
    [TOPIC_TYPE_CLASSES.city]: { symbol: TriangleSymbol, topic: "熱門城市" },
    [TOPIC_TYPE_CLASSES.event]: { symbol: TriangleSymbol, topic: "熱門活動" },
    [TOPIC_TYPE_CLASSES.food]: { symbol: SquareSymbol, topic: "熱門美食" },
    [TOPIC_TYPE_CLASSES.hotel]: { symbol: SquareSymbol, topic: "熱門住宿" },
  }[topicType]);

const ListBlock = ({ children, topicType }) => {
  const TopicSymbol = getTopic(topicType).symbol;
  const TopicTitle = getTopic(topicType).topic;
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
