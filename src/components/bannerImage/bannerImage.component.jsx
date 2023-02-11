//* Parent：banner.component.jsx
// todo: get params to change img instead use props

import { ImageWall } from "./bannerImage.styles";

const BannerImage = ({ children, $imageType }) => {
  return <ImageWall $imageType={$imageType}>{children}</ImageWall>;
};

export default BannerImage;
