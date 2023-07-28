import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DestinationPage from "./pages/DestinationPage";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/destination" element={<DestinationPage />} />
    </Routes>
  );
}

export default App;
