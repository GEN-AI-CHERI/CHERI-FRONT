import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DestinationPage from "./pages/DestinationPage";
import ThemePage from "./pages/ThemePage";
import Period from "./pages/Period";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/themes" element={<ThemePage />} />
      <Route path="/period" element={<Period />} />
    </Routes>
  );
}

export default App;
