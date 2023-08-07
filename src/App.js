import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainNDetail/MainPage";
import OptionsPage from "./pages/OptionsPage";
import SignUpPage from "./pages/User/SignUpPage";
import LoginPage from "./pages/User/LoginPage";
import DestinationPage from "./pages/Itinerary/DestinationPage";
import ThemePage from "./pages/Itinerary/ThemePage";
import PeriodPage from "./pages/Itinerary/PeriodPage";
import PartyPage from "./pages/Destination/PartyPage";
import ThemePage2 from "./pages/Destination/ThemePage2";
import PeriodPage2 from "./pages/Destination/PeriodPage2";
import ResultPage from "./pages/Destination/ResultPage";
import ChatPage from "./pages/Itinerary/ChatPage";
import ItineraryPage from "./pages/ItineraryPage";
import MapPage from "./pages/Map/MapPage";
import MapResultPage from "./pages/Map/MapResultPage";
import DetailResultPage from "./pages/Map/DetailResultPage";
import MyPage from "./pages/User/MyPage";
import DetailedDestPage from "./pages/MainNDetail/DetailedDestPage";
import LoadingPage from "./pages/Itinerary/LoadingPage";
import MyChatPage from "./pages/User/MyChatPage";
import LoadingSavedPage from "./pages/User/LoadingSavedPage";

import { Provider } from "react-redux";
import store from "./Redux/itinerary_reducer";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/menu" element={<OptionsPage />} />
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
        <Route path="/detail/:region_id" element={<DetailedDestPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/my-chat/:room_id" element={<MyChatPage />} />
        <Route path="/loading-saved/:room_id" element={<LoadingSavedPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
