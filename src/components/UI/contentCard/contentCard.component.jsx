//* who call this：
//*   1. popularCityList.component.jsx
//*   2. popularEventList.component.jsx
//*   3. popularFoodList.component.jsx

import {
  CardOutline,
  ContentTitle,
  TriangleSymbol,
  SquareSymbol,
} from "./contentCard.styles";

const ContentCard = ({ children }) => {
  return (
    <CardOutline>
      <ContentTitle>
        <TriangleSymbol />
        熱門城市
      </ContentTitle>
      {children}
    </CardOutline>
  );
};

export default ContentCard;
