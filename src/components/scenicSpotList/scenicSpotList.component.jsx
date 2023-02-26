import { useSelector } from "react-redux";

import ListBlock from "../UI/listBlock/listBlock.component";
import ScenicSpotCard from "../scenicSpotCard/scenicSpotCard.component";

import { ScenicSpotListLayout } from "./scenicSpotList.styles";

import { selectScenicSpotListMap } from "../../store/scenicSpot/scenicSpot.selector";

const ScenicSpotList = () => {
  const scenicSpotList = useSelector(selectScenicSpotListMap);
  return (
    <ListBlock topicType="city">
      <ScenicSpotListLayout>
        {scenicSpotList.map((scenicSpot) => (
          <ScenicSpotCard key={scenicSpot.id} scenicSpotDetail={scenicSpot} />
        ))}
      </ScenicSpotListLayout>
    </ListBlock>
  );
};

export default ScenicSpotList;
