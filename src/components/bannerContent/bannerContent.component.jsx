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
  BannerTrafficButton,
  TrafficButton,
} from "./bannerContent.styles";

const BannerContent = ({ $pageType }) => {
  const exceptTraffic = $pageType !== "traffic";
  return (
    <BannerContentLayout $pageType={$pageType}>
      {exceptTraffic && (
        <>
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
        </>
      )}

      <BannerForm $pageType={$pageType} />
      {$pageType === "traffic" && (
        <>
          <BannerTrafficButton>
            <TrafficButton>
              往 <span>蘭潭</span>
            </TrafficButton>
            <TrafficButton>
              往 <span>港坪運動公園</span>
            </TrafficButton>
          </BannerTrafficButton>
        </>
      )}
    </BannerContentLayout>
  );
};

export default BannerContent;
