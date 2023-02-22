import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { trafficRoutes } from "../../dummy_data/traffic_routes";

import {
  Outline,
  BusTimeTable,
  BusTime,
  BusName,
} from "./busTimeContent.styles";

import { selectBusRoutes } from "../../store/bus/bus.selector";

const BusTimeContent = () => {
  const routesData = useSelector(selectBusRoutes);
  const [busInfo, setBusInfo] = useState(routesData[0]);

  useEffect(() => {
    setBusInfo(routesData[0]);
  }, [setBusInfo, routesData]);

  return (
    <Outline>
      {busInfo &&
        busInfo.Stops.map((stop) => {
          const { StopUID, StopID, StopName } = stop;
          return (
            <BusTimeTable key={StopUID}>
              <BusTime>{StopID}</BusTime>
              <BusName>{StopName.Zh_tw}</BusName>
            </BusTimeTable>
          );
        })}
    </Outline>
  );
};

export default BusTimeContent;

//* 先抓到正確的站別及順序
//* 抓到各站別正確的時間資訊
//* 這邊站別順序抓到了，剩下時間還沒辦法接上去
//* 因為實際縣市公車時間與 api 不同，先搞其他的之後再回來做
