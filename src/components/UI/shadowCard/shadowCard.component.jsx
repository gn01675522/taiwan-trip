//* which use this：
//* 1. contentCard.component.jsx
//* 2. largeEventCard.component.jsx
//* 3. banner.component.jsx
//* 4. modal.component.jsx
//* 5. traffic.component.jsx

import {
  CardOutline,
  CardContent,
  BottomShadow,
  HintText,
} from "./shadowCard.styles";

const ShadowCard = ({ children, $contentType, $pageType, ...otherProps }) => {
  const tempState = true;
  return (
    <>
      <CardOutline $pageType={$pageType} {...otherProps}>
        <CardContent $pageType={$pageType}>
          {tempState ? children : <HintText>請選擇公車路線</HintText>}
        </CardContent>
        <BottomShadow $contentType={$contentType} />
      </CardOutline>
    </>
  );
};

export default ShadowCard;
