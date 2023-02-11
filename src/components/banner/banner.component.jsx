import { Outlet } from "react-router-dom";

import BannerImage from "../bannerImage/bannerImage.component";
import BannerContent from "../bannerContent/bannerContent.component";
import ShadowCard from "../UI/shadowCard/shadowCard.component";
import { BannerOutline } from "./banner.styles";

const Banner = ({ $imageType }) => {
  return (
    <>
      <BannerOutline>
        <ShadowCard $contentType="banner">
          <BannerImage $imageType={$imageType}>
            <BannerContent />
          </BannerImage>
        </ShadowCard>
      </BannerOutline>
      <Outlet />
    </>
  );
};

export default Banner;
