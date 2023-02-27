import { getAuthToken } from "./getApiAuthToken";

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
    console.log(error);
  }
};

export const getTDXEventList = async (county) => {
  const token = await getAuthToken();
  const randomNumber = Math.floor(Math.random() * 819) + 1;
  const apiUrl = county
    ? ""
    : `https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24top=4&%24skip=${randomNumber}&%24format=JSON`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: token,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTDXFoodList = async () => {
  const token = await getAuthToken();
  const randomNumber = Math.floor(Math.random() * 5143) + 1;

  try {
    const response = await fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24top=10&%24skip=${randomNumber}&%24format=JSON`,
      {
        method: "GET",
        headers: token,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTDXHotelList = async () => {
  const token = await getAuthToken();
  const randomNumber = Math.floor(Math.random() * 13231) + 1;
  try {
    const response = await fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel?%24top=10&%24skip=${randomNumber}&%24format=JSON`,
      {
        method: "GET",
        headers: token,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTDXScenicSpotList = async (county) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${county}?%24top=20&%24format=JSON`,
      {
        method: "GET",
        headers: token,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24filter=contains%28ScenicSpotName%2C%27%E7%B4%AB%27%29&%24top=3&%24format=JSON
// `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24filter=contains(ScenicSpotName,'四季')&%24top=3&%24format=JSON` 搜尋
