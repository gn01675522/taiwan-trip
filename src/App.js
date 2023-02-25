import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Footer from "./components/UI/footer/footer.component";
import Food from "./routes/food/food.component";
import Traffic from "./routes/traffic/traffic.component";
import Detail from "./components/UI/detail/detail.component";
import ScenicSpot from "./routes/scenicSpot/scenicSpot.component";

import { selectModalOpen } from "./store/detail/detail.selector";

import { GlobalStyle } from "./global.styles";

const App = () => {
  const isModalOpen = useSelector(selectModalOpen);
  const htmlBody = document.querySelector("body");

  useEffect(() => {
    htmlBody.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <div>
      <GlobalStyle />
      {isModalOpen && <Detail />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="scenicSpot/:county" element={<ScenicSpot />} />
          <Route path="detail" element={<Detail />} />
          <Route path="foodAndHotel" element={<Food />} />
          <Route path="traffic" element={<Traffic />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
