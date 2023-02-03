import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />} />
      </Routes>
    </div>
  );
};

export default App;
