import { useState, useEffect, createContext } from "react";
import { getAuthToken } from "../API/getApiAuthToken";

export const EventContext = createContext({
  popularEvent: [],
  setPopularEvent: () => {},
});

export const EventProvider = ({ children }) => {
  const [popularEvent, setPopularEvent] = useState([]);
  const value = { popularEvent, setPopularEvent };

  useEffect(() => {
    fetch(
      "https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/Taipei?%24top=4&%24format=JSON",
      {
        mehod: "GET",
        headers: getAuthToken(),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPopularEvent(data);
      })
      .catch((error) => console.log(error));
  }, [setPopularEvent]);

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};

// 資料架構，請於各
//  Title： 活動、景點、餐廳或飯店名稱
//  Address： 活動、景點、餐廳或飯店地址
//  Description： 活動、景點、餐廳或飯店描述
//  Location： 活動、景點、餐廳或飯店所在區域
//  Picture： 活動、景點、餐廳或飯店圖片
//  Phone： 活動、景點、餐廳或飯店聯絡方式
//  Charge： 活動、景點、餐廳或飯店花費
//  Cycle： 活動、景點、餐廳或飯店營業週期
//  StartTime： 活動、景點、餐廳或飯店營業起始時間
//  EndTime： 活動、景點、餐廳或飯店營業結束時間
