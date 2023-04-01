//* which use this：
//* 1. home.component.jsx
//* 2. food.component.jsx
//* 3. traffic.component.jsx
//* 4. foodAndHotel.component.jsx
//* 5. event.component.jsx
//* 6. scenicSpot.component.jsx
//* 7. hotel.component.jsx

import {
  ContainerOutlineInHome,
  ContainerOutlineInEvent,
  ContainerOutlineInFood,
  ContainerOutlineInHotel,
  ContainerOutlineInScenicSpot,
  ContainerOutlineInTraffic,
  ContainerOutlineInSearch,
} from "./container.styles";

import { PAGE_TYPE } from "../../../dummy_data/DUMMY_DATA";

const getPage = (pageType) =>
  ({
    [PAGE_TYPE.home]: ContainerOutlineInHome,
    [PAGE_TYPE.food]: ContainerOutlineInFood,
    [PAGE_TYPE.event]: ContainerOutlineInEvent,
    [PAGE_TYPE.hotel]: ContainerOutlineInHotel,
    [PAGE_TYPE.traffic]: ContainerOutlineInTraffic,
    [PAGE_TYPE.scenicSpot]: ContainerOutlineInScenicSpot,
    [PAGE_TYPE.search]: ContainerOutlineInSearch,
  }[pageType]);

const Container = ({ children, pageType }) => {
  const CustomContainer = getPage(pageType);

  return <CustomContainer>{children}</CustomContainer>;
};

export default Container;
