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
