import BannerForm from "../bannerForm/bannerForm.component";
import BannerImage from "../bannerImage/bannerImage.component";
import Card from "../UI/card.component";
import {
  BannerContent,
  BannerTitle,
  BannerSubtitle,
  OSymbol,
  TaiwanText,
  SpecialLetter,
  TriangleSymbol,
  ISymbol,
} from "./banner.styles";

const Banner = () => {
  return (
    <>
      <Card>
        <BannerImage>
          <BannerContent>
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
            <BannerSubtitle>台北台中台南屏東宜蘭......遊遍台灣</BannerSubtitle>
            <BannerForm />
          </BannerContent>
        </BannerImage>
      </Card>
    </>
  );
};

export default Banner;
