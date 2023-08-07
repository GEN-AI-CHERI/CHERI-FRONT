import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import OptionsPage from "./pages/OptionsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DestinationPage from "./pages/DestinationPage";
import ThemePage from "./pages/ThemePage";
import PeriodPage from "./pages/PeriodPage";
import PartyPage from "./pages/PartyPage";
import ThemePage2 from "./pages/ThemePage2";
import PeriodPage2 from "./pages/PeriodPage2";
import ResultPage from "./pages/ResultPage";
import ChatPage from "./pages/ChatPage";
import ItineraryPage from "./pages/ItineraryPage";
import MapPage from "./pages/MapPage";
import MapResultPage from "./pages/MapResultPage";
import DetailResultPage from "./pages/DetailResultPage";
import MyPage from "./pages/MyPage";
import DetailedDestPage from "./pages/DetailedDestPage";
import LoadingPage from "./pages/LoadingPage";

import { Provider } from "react-redux";
import store from "./Redux/itinerary_reducer";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/themes" element={<ThemePage />} />
        <Route path="/period" element={<PeriodPage />} />
        <Route path="/themes2" element={<ThemePage2 />} />
        <Route path="/party" element={<PartyPage />} />
        <Route path="/period2" element={<PeriodPage2 />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/map-result" element={<MapResultPage />} />
        <Route path="/detail-result" element={<DetailResultPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail" element={<DetailedDestPage />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
