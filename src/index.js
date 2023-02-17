import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { EventProvider } from "./contexts/event.context";
import { FoodProvider } from "./contexts/food.context";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <EventProvider>
          <FoodProvider>
            <App />
          </FoodProvider>
        </EventProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

//* useContext 還沒搞定
