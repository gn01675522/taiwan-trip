//* which use this：
//* 1. banner.component.jsx

import { ImageWall } from "./bannerImage.styles";

const BannerImage = ({ pageType }) => {
  return <ImageWall $pageType={pageType} />;
};

export default BannerImage;
