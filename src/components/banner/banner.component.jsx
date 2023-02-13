import BannerImage from "../bannerImage/bannerImage.component";
import BannerContent from "../bannerContent/bannerContent.component";
import ShadowCard from "../UI/shadowCard/shadowCard.component";

import { BannerOutline } from "./banner.styles";

const Banner = ({ pageType }) => {
  const exceptTraffic = pageType !== "traffic";
  return (
    <>
      <BannerOutline $pageType={pageType}>
        <ShadowCard $contentType="banner" $pageType="banner">
          {exceptTraffic && <BannerImage pageType={pageType} />}
          <BannerContent $pageType={pageType} />
        </ShadowCard>
      </BannerOutline>
    </>
  );
};

export default Banner;
