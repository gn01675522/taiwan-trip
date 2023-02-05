import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Banner from "./components/banner/banner.component";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Banner />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
