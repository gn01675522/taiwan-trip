const parameter = {
  grant_type: "client_credentials",
  client_id: process.env.REACT_APP_TDX_CLIENT_ID || "",
  client_secret: process.env.REACT_APP_TDX_SECRET || "",
};

const auth_url =
  "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";

export const getAuthToken = async () => {
  try {
    const response = await fetch(auth_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(parameter),
    });
    const data = await response.json();
    const token = await data.access_token;
    return { authorization: `Bearer ${token}` };
  } catch (error) {
    console.log(error);
  }
};
