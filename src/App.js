import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DestinationPage from "./pages/DestinationPage";
import ThemePage from "./pages/ThemePage";
import PeriodPage from "./pages/PeriodPage";
import PartyPage from "./pages/PartyPage";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/themes" element={<ThemePage />} />
      <Route path="/period" element={<PeriodPage />} />
      <Route path="/themes2" element={<ThemePage />} />
      <Route path="/party" element={<PartyPage />} />
      <Route path="/period2" element={<PeriodPage />} />
    </Routes>
  );
}

export default App;
