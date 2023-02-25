import { getAuthToken } from "./getApiAuthToken";

export const getTDXBusRoutes = async () => {
  try {
    const response = await fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Bus/StopOfRoute/City/Chiayi/%E5%8F%B0%E7%81%A3%E5%A5%BD%E8%A1%8C%E5%85%89%E6%9E%97%E6%88%91%E5%98%89%E7%B7%9A%28%E9%BB%83%E7%B7%9A%29?%24top=30&%24format=JSON`,
      {
        method: "GET",
        headers: getAuthToken(),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTDXEventList = async () => {
  try {
    const response = await fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/Taipei?%24top=4&%24format=JSON`,
      {
        method: "GET",
        headers: getAuthToken(),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTDXFoodList = async () => {
  try {
    const response = await fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant/NewTaipei?%24top=10&%24format=JSON`,
      {
        method: "GET",
        headers: getAuthToken(),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTDXHotelList = async () => {
  try {
    const response = await fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel?%24top=10&%24format=JSON`,
      {
        method: "GET",
        headers: getAuthToken(),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTDXScenicSpotList = async (county) => {
  try {
    const response = await fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${county}?%24top=20&%24format=JSON`,
      {
        method: "GET",
        headers: getAuthToken(),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};