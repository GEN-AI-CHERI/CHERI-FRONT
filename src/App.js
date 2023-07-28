import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import OptionsPage from "./pages/OptionsPage";
function App() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/options" element={<OptionsPage />} />
    </Routes>
  );
}

export default App;
