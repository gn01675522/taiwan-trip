//* whitch use this：
//* 1. banner.component.jsx

import BannerForm from "../bannerForm/bannerForm.component";
import BannerTitle from "../bannerTitle/bannerTitle.component";

import { BannerContentLayout } from "./bannerContent.styles";

const BannerContent = ({ $pageType }) => {
  const exceptTraffic = $pageType !== "traffic";
  //* 由於公車路線的內容與其他頁面不同，且 $pageType 為
  //* styled component 的 props，故將其作為判斷機制。

  return (
    <>
      <BannerContentLayout $pageType={$pageType}>
        {exceptTraffic && <BannerTitle />}
        <BannerForm $pageType={$pageType} />
      </BannerContentLayout>
    </>
  );
};
//* 由於公車路線尚未開發完畢，故此處先暫時使用固定資料

export default BannerContent;
