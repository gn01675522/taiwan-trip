import axios from "axios";

const parameter = {
  grant_type: "client_credentials",
  client_id: process.env.REACT_APP_TDX_CLIENT_ID || "",
  client_secret: process.env.REACT_APP_TDX_SECRET || "",
};

const auth_url =
  "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";

export const getAuthToken = async () => {
  try {
    const response = await axios.post(
      auth_url,
      new URLSearchParams(parameter),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const token = await response.data.access_token;
    return token;
  } catch (error) {
    console.log(error);
  }
};
