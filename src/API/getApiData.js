import { getAuthToken } from "./getApiAuthToken";
import { createRandomNum } from "../utils/api/api.utils";
//* 引入取得的 api token 資料，及隨機取得亂數的 utils
import { OFF_ISLAND_DATA } from "../dummy_data/OFF_ISLAND_DATA";

export const getTDXBusRoutes = async () => {
  const token = await getAuthToken();
  try {
    const response = await fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Bus/StopOfRoute/City/Chiayi/%E5%8F%B0%E7%81%A3%E5%A5%BD%E8%A1%8C%E5%85%89%E6%9E%97%E6%88%91%E5%98%89%E7%B7%9A%28%E9%BB%83%E7%B7%9A%29?%24top=30&%24format=JSON`,
      {
        method: "GET",
        headers: token,
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
//* 取得公車路線資料，目前為 api 路由寫死嘉義市，待後續開發再進行修改

export const getTDXEventList = async (keyword, county) => {
  const token = await getAuthToken();
  // const skipNum = createRandomNum(819);
  const apiUrl =
    county && keyword
      ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/${county}?%24filter=contains(ActivityName,'${keyword}')&%24top=20&%24format=JSON`
      : county
      ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/${county}?%24top=20&%24format=JSON`
      : keyword
      ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24filter=contains(ActivityName,'${keyword}')&%24top=30&%24format=JSON`
      : "https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24top=20&%24format=JSON";
  // : `https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24top=4&%24skip=${skipNum}&%24format=JSON`;

  let data;
  do {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: token,
      });
      data = await response.json();
    } catch (error) {
      throw error;
    }
  } while (!data.length);
  return data;
};
//* 取得活動資料；根據傳入的關鍵字及縣市來決定要使用哪個路由

export const getTDXFoodList = async (keyword, county) => {
  const token = await getAuthToken();
  // const skipNum = createRandomNum(5113);
  const apiUrl =
    county && keyword
      ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant/${county}?%24filter=contains(RestaurantName,'${keyword}')&%24top=20&%24format=JSON`
      : county
      ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant/${county}?%24top=20&%24format=JSON`
      : keyword
      ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24filter=contains(RestaurantName,'${keyword}')&%24top=20&%24format=JSON`
      : "https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24top=20&%24format=JSON";
  // : `https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24top=10&%24skip=${skipNum}&%24format=JSON`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: token,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
//* 取得餐飲資料；根據傳入的關鍵字及縣市來決定要使用哪個路由

export const getTDXHotelList = async (keyword, county) => {
  const token = await getAuthToken();
  // const skipNum = createRandomNum(13231);
  const apiUrl =
    county && keyword
      ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel/${county}?%24filter=contains(HotelName,'${keyword}')&%24top=20&%24format=JSON`
      : county
      ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel/${county}?%24top=20&%24format=JSON`
      : keyword
      ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel?%24filter=contains(HotelName'${keyword}')&%24top=20&%24format=JSON`
      : "https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel?%24top=20&%24format=JSON";
  // : `https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel?%24top=10&%24skip=${skipNum}&%24format=JSON`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: token,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
//* 取得旅館資料；根據傳入的關鍵字及縣市來決定要使用哪個路由

export const getTDXScenicSpotList = async (keyword, county) => {
  const token = await getAuthToken();
  if (county === "Off-Island") {
    return OFF_ISLAND_DATA.slice(0, 20);
  } else {
    const apiUrl =
      county && keyword
        ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${county}?%24filter=contains(ScenicSpotName,'${keyword}')&%24top=20&%24format=JSON`
        : county
        ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${county}?%24top=20&%24format=JSON`
        : keyword
        ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24filter=contains(ScenicSpotName,'${keyword}')&%24top=20&%24format=JSON`
        : "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24top=20&%24format=JSON";

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: token,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
};
//* 取得景點資料；根據傳入的關鍵字及縣市來決定要使用哪個路由 Off-Island
