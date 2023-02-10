//* who call this：
//* 1. banner.component.jsx
//* 2. popularEventList.component.jsx
//* 3. popularFoodList.component.jsx

import { CardOutline, CardContent, Shadow } from "./shadowCard.styles";

const ShadowCard = ({ children, $contentType }) => {
  return (
    <>
      <CardOutline>
        <CardContent>{children}</CardContent>
        <Shadow $contentType={$contentType} />
      </CardOutline>
    </>
  );
};

export default ShadowCard;
