import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { GlobalStyle } from "./global.styles";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Footer from "./components/UI/footer/footer.component";
import Food from "./routes/food/food.component";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="food" element={<Food />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
