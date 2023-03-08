//* which use this：
//* 1. traffic.component.jsx

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
