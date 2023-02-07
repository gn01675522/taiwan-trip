import {
  CardOutline,
  ContentTitle,
  TriangleSymbol,
} from "./contentCard.styles";

const ContentCard = ({ children }) => {
  return (
    <CardOutline>
      <ContentTitle>
        <TriangleSymbol />
        熱門景點
      </ContentTitle>
      {children}
    </CardOutline>
  );
};

export default ContentCard;
