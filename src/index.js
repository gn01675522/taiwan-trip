import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { EventProvider } from "./contexts/event.context";
import { FoodProvider } from "./contexts/food.context";
import { HotelProvider } from "./contexts/hotel.context";
import { SelectProvider } from "./contexts/select.context";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SelectProvider>
          <EventProvider>
            <FoodProvider>
              <HotelProvider>
                <App />
              </HotelProvider>
            </FoodProvider>
          </EventProvider>
        </SelectProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

//* useContext 還沒搞定
