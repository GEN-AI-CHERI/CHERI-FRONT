import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DestinationPage from "./pages/DestinationPage";
import ThemePage from "./pages/ThemePage";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/themes" element={<ThemePage />} />
    </Routes>
  );
}

export default App;
