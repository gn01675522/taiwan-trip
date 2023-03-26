import {
  BannerMainTitle,
  OSymbol,
  SquareSymbol,
  TaiwanText,
  SpecialLetter,
  TriangleSymbol,
  ISymbol,
  BannerSubtitle,
} from "./bannerTitle.styles";

const BannerTitle = () => {
  return (
    <>
      <BannerMainTitle>
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
      </BannerMainTitle>

      <BannerSubtitle>
        台北、台中、台南、屏東、宜蘭......遊遍台灣
      </BannerSubtitle>
    </>
  );
};

export default BannerTitle;
