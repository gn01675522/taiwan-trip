import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import ScenicSpotCard from "../scenicSpotCard/scenicSpotCard.component";

import { ScenicSpotListLayout } from "./scenicSpotList.styles";

import { selectScenicSpotList } from "../../store/scenicSpot/scenicSpot.selector";

const ScenicSpotList = () => {
  const scenicSpotList = useSelector(selectScenicSpotList);
  return (
    <ListBlock topicType="event">
      <ScenicSpotListLayout>
        {scenicSpotList.map((scenicSpot, index) => (
          <ScenicSpotCard key={index} scenicSpotDetail={scenicSpot} />
        ))}
      </ScenicSpotListLayout>
    </ListBlock>
  );
};

export default ScenicSpotList;
