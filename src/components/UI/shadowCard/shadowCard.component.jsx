//* which use this：
//* 1. banner.component.jsx
//* 2. popularEventList.component.jsx
//* 3. popularFoodList.component.jsx
//* 4. modal.component.jsx
//* 5. traffic.component.jsx

import {
  CardOutline,
  CardContent,
  Shadow,
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
        <Shadow $contentType={$contentType} />
      </CardOutline>
    </>
  );
};

export default ShadowCard;
