//* Parent：
//* 1. home.component.jsx
//* 2. food.component.jsx
//* 3. traffic.component.jsx

import {
  ContainerOutlineInHome,
  ContainerOutlineInFood,
  ContainerOutlineInTraffic,
} from "./container.styles";

import { PAGE_TYPE } from "../../../dummy_data/DUMMY_DATA";

const getPage = (pageType) =>
  ({
    [PAGE_TYPE.home]: ContainerOutlineInHome,
    [PAGE_TYPE.food]: ContainerOutlineInFood,
    [PAGE_TYPE.traffic]: ContainerOutlineInTraffic,
  }[pageType]);

const Container = ({ children, pageType }) => {
  const CustomContainer = getPage(pageType);

  return <CustomContainer>{children}</CustomContainer>;
};

export default Container;
