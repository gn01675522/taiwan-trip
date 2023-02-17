import { useState, useEffect, createContext } from "react";
import { getAuthToken } from "../API/getApiAuthToken";

export const EventContext = createContext({
  popularEvent: [],
  setPopularEvent: () => {},
});

export const EventProvider = ({ children }) => {
  const [popularEvent, setPopularEvent] = useState([]);
  const value = { popularEvent, setPopularEvent };

  useEffect(() => {
    fetch(
      "https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/Taipei?%24top=4&%24format=JSON",
      {
        mehod: "GET",
        headers: getAuthToken(),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPopularEvent(data);
      })
      .catch((error) => console.log(error));
  }, [setPopularEvent]);

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};
