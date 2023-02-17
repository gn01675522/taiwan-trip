import axios from "axios";
import { getAuthToken } from "./getApiAuthToken";

let apiUrl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant";
// "https://tdx.transportdata.tw/api/basic//v2/Tourism/ScenicSpot";
// "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/Taoyuan?%24top=30&%24format=JSON";

export const getCityList = async () => {
  try {
    let tokenData = await getAuthToken();
    let res = await axios.get(apiUrl, {
      headers: tokenData,
    });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("inside getApiData", err);
  }
};
//* 暫存
//* 取得指定縣市景點資料 /v2/Tourism/ScenicSpot/{City}
//* 取得指定縣市餐飲資料 /v2/Tourism/Restaurant/{City}
//* 取得指定縣市住宿資料 /v2/Tourism/Hotel/{City}
//* 取得指定縣市活動資料 /v2/Tourism/Activity/{City}
