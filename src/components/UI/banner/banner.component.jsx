//* who use this：
//* 1. home.component.jsx
//* 2. event.component.jsx
//* 3. food.component.jsx
//* 4. foodAndHotel.component.jsx
//* 5. hotel.component.jsx
//* 6. scenicSpot.component.jsx
//* 7. traffic.component.jsx

import { useState, useEffect } from "react";
import BannerImage from "../../bannerImage/bannerImage.component";
import BannerContent from "../../bannerContent/bannerContent.component";
import ShadowCard from "../shadowCard/shadowCard.component";
import BannerForm from "../../bannerForm/bannerForm.component";
import TrafficBtnArea from "../../trafficBtnArea/trafficBtnArea.component";

import { BannerOutline, BottomShadow } from "./banner.styles";

const Banner = ({ pageType }) => {
  const [isPcScreen, setIsPcScreen] = useState(window.innerWidth);
  const exceptTraffic = pageType !== "traffic";
  //* 由於公車路線的內容並無 banner 圖片，且 pageType 為
  //* styled component 的 props，故將其作為判斷機制。

  useEffect(() => {
    const screenWideChange = () => {
      setIsPcScreen(window.innerWidth);
    };

    window.addEventListener("resize", screenWideChange);

    return () => {
      window.removeEventListener("resize", screenWideChange);
    };
  }, [isPcScreen]);

  return (
    <>
      <BannerOutline $pageType={pageType}>
        {isPcScreen >= 1024 ? (
          <ShadowCard $contentType="banner" $pageType="banner">
            {exceptTraffic && <BannerImage pageType={pageType} />}
            <BannerContent $pageType={pageType} />
          </ShadowCard>
        ) : pageType === "traffic" ? (
          <BannerContent $pageType={pageType} />
        ) : (
          <BannerForm $pageType={pageType} />
        )}
      </BannerOutline>
      <BottomShadow />
      {pageType === "traffic" && <TrafficBtnArea />}
    </>
  );
};

export default Banner;
