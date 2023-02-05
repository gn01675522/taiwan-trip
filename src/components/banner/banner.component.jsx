import BannerForm from "../bannerForm/bannerForm.component";
import Shadow from "../shadow/shadow.component";
import {
  BannerContainer,
  BannerImage,
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
      <BannerContainer>
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
      </BannerContainer>
      <Shadow />
    </>
  );
};

export default Banner;
