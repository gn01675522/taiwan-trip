import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Footer from "./components/UI/footer/footer.component";
import FoodAndHotel from "./routes/foodAndHotel/foodAndHotel.component";
import Traffic from "./routes/traffic/traffic.component";
import Detail from "./components/UI/detail/detail.component";
import Search from "./routes/search/search.component";
import SingleTopic from "./routes/singleTopic/singleTopic.component";

import { selectModalOpen } from "./store/detail/detail.selector";

import { GlobalStyle } from "./global.styles";

const App = () => {
  const isModalOpen = useSelector(selectModalOpen);
  const htmlBody = document.querySelector("body");
  const routeTitle = ["event", "hotel", "food", "scenicSpot"];

  useEffect(() => {
    htmlBody.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [htmlBody.style, isModalOpen]);

  return (
    <>
      <GlobalStyle />
      {isModalOpen && <Detail />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {routeTitle.map((title) => {
            return (
              <Route
                key={title}
                path={`/${title}/:county/:keyword?`}
                element={<SingleTopic whichTopic={title} />}
              />
            );
          })}
          <Route path="detail" element={<Detail />} />
          <Route path="foodAndHotel" element={<FoodAndHotel />} />
          <Route path="traffic" element={<Traffic />} />
        </Route>
        <Route path="search" element={<Search />}>
          {/*<Route
            path="search/*"
            element={<SingleTopic whichTopic="scenicSpot" />}
        />*/}
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;

//todo traffic 尚未完成，暫不開放
