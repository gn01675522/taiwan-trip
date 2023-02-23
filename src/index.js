import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { SelectProvider } from "./contexts/select.context";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SelectProvider>
          <App />
        </SelectProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
