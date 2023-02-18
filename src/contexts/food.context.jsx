import { useState, useEffect, createContext } from "react";
import { getAuthToken } from "../API/getApiAuthToken";

export const FoodContext = createContext({
  popularFood: [],
  setPopularFood: () => {},
});

export const FoodProvider = ({ children }) => {
  const [popularFood, setPopularFood] = useState([]);
  const value = { popularFood, setPopularFood };

  useEffect(() => {
    fetch(
      "https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant/NantouCounty?%24top=10&%24format=JSON",
      {
        mehod: "GET",
        headers: getAuthToken(),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPopularFood(data);
      })
      .catch((error) => console.log(error));
  }, [setPopularFood]);

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};
