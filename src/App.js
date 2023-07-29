import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import OptionsPage from "./pages/OptionsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/options" element={<OptionsPage />} />
    </Routes>
  );
}

export default App;
