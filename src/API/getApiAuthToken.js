import axios from "axios";

const parameter = {
  grant_type: "client_credentials",
  client_id: process.env.TDX_CLIENT_ID || "",
  client_secret: process.env.TDX_SECRET || "",
};

const auth_url =
  "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";

const options = {
  method: "POST",
  url: auth_url,
  headers: { "content-type": "application/x-www-form-urlencoded" },
  dataType: "JSON",
  data: parameter,
};

export const getAuthToken = async () => {
  try {
    let res = await axios(options);
    let accesstoken = res.data;
    return {
      authorization: "Bearer " + accesstoken.access_token,
    };
  } catch (error) {
    console.log("inside getApiAuthToken", error);
  }
};
