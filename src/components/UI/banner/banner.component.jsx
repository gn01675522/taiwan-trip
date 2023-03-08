//* who use this：
//* 1. home.component.jsx
//* 2. event.component.jsx
//* 3. food.component.jsx
//* 4. foodAndHotel.component.jsx
//* 5. hotel.component.jsx
//* 6. scenicSpot.component.jsx
//* 7. traffic.component.jsx

import BannerImage from "../../bannerImage/bannerImage.component";
import BannerContent from "../../bannerContent/bannerContent.component";
import ShadowCard from "../shadowCard/shadowCard.component";

import { BannerOutline } from "./banner.styles";

const Banner = ({ pageType }) => {
  const exceptTraffic = pageType !== "traffic";
  //* 由於公車路線的內容並無 banner 圖片，且 pageType 為
  //* styled component 的 props，故將其作為判斷機制。

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
