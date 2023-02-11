import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { GlobalStyle } from "./global.styles";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Footer from "./components/UI/footer/footer.component";
import Food from "./routes/food/food.component";
import Detail from "./components/detail/detail.component";

const App = () => {
  const tempState = true;
  return (
    <div>
      <GlobalStyle />
      {tempState && <Detail />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="food" element={<Food />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
