import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Footer from "./components/UI/footer/footer.component";
import Food from "./routes/food/food.component";
import Traffic from "./routes/traffic/traffic.component";
import Detail from "./components/UI/detail/detail.component";

import { selectModalOpen } from "./store/detail/detail.selector";

import { GlobalStyle } from "./global.styles";

import { getAuthToken } from "./API/getApiAuthToken";

const App = () => {
  const modalIsOpen = useSelector(selectModalOpen);
  getAuthToken();

  return (
    <div>
      <GlobalStyle />
      {modalIsOpen && <Detail />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="food" element={<Food />} />
          <Route path="traffic" element={<Traffic />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
