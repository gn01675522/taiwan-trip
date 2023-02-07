import { Outlet } from "react-router-dom";

import BannerForm from "../bannerForm/bannerForm.component";
import BannerImage from "../bannerImage/bannerImage.component";
import ShadowCard from "../UI/shadowCard/shadowCard.component";
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
      <ShadowCard>
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
            <BannerSubtitle>
              台北、台中、台南、屏東、宜蘭......遊遍台灣
            </BannerSubtitle>
            <BannerForm />
          </BannerContent>
        </BannerImage>
      </ShadowCard>
      <Outlet />
    </>
  );
};

export default Banner;
