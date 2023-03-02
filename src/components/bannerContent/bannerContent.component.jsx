//* whitch use this：
//* 1. banner.component.jsx

import BannerForm from "../bannerForm/bannerForm.component";

import {
  BannerContentLayout,
  BannerTitle,
  OSymbol,
  SquareSymbol,
  TaiwanText,
  SpecialLetter,
  TriangleSymbol,
  ISymbol,
  BannerSubtitle,
  BannerTrafficButton,
  TrafficOption,
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
            me t<SquareSymbol />
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
            <input type="radio" id="departure" name="choose" />
            <TrafficOption htmlFor="departure">
              往 <span>蘭潭</span>
            </TrafficOption>
            <input type="radio" id="arrival" name="choose" />
            <TrafficOption htmlFor="arrival">
              往 <span>港坪運動公園</span>
            </TrafficOption>
          </BannerTrafficButton>
        </>
      )}
    </BannerContentLayout>
  );
};

export default BannerContent;
