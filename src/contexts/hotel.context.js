import { useState, useEffect, createContext } from "react";
import { getAuthToken } from "../API/getApiAuthToken";

export const HotelContext = createContext({
  popularHotel: [],
  setPopularHotel: () => {},
});

export const HotelProvider = ({ children }) => {
  const [popularHotel, setPopularHotel] = useState([]);
  const value = { popularHotel, setPopularHotel };

  useEffect(() => {
    fetch(
      "https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel?%24top=10&%24format=JSON",
      {
        mehod: "GET",
        headers: getAuthToken(),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPopularHotel(data);
      })
      .catch((error) => console.log(error));
  }, [setPopularHotel]);

  return (
    <HotelContext.Provider value={value}>{children}</HotelContext.Provider>
  );
};
