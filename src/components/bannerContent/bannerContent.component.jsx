import BannerForm from "../bannerForm/bannerForm.component";

import {
  BannerContentLayout,
  BannerTitle,
  OSymbol,
  TaiwanText,
  SpecialLetter,
  TriangleSymbol,
  ISymbol,
  BannerSubtitle,
} from "./bannerContent.styles";

const BannerContent = () => {
  return (
    <BannerContentLayout>
      <BannerTitle>
        Welc
        <OSymbol />
        me
        <TaiwanText>
          Ta
          <SpecialLetter>
            <TriangleSymbol />
            <ISymbol />
          </SpecialLetter>
          wan
        </TaiwanText>
      </BannerTitle>

      <BannerSubtitle>
        台北、台中、台南、屏東、宜蘭......遊遍台灣
      </BannerSubtitle>

      <BannerForm/>
    </BannerContentLayout>
  );
};

export default BannerContent;
