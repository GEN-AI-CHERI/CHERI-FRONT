import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainNDetail/MainPage";
import MenuPage from "./pages/MainNDetail/MenuPage";
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
import LoadingPage2 from "./pages/Destination/LoadingPage2";
import MyChatPage from "./pages/User/MyChatPage";
import LoadingSavedPage from "./pages/User/LoadingSavedPage";
import PrivateRoute from "./Router/PrivateRoute";

import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/result" element={<ResultPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/my-chat/:room_id" element={<MyChatPage />} />
          <Route
            path="/loading-saved/:room_id"
            element={<LoadingSavedPage />}
          />
          <Route path="/loading" element={<LoadingPage />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/themes" element={<ThemePage />} />
        <Route path="/period" element={<PeriodPage />} />
        <Route path="/themes2" element={<ThemePage2 />} />
        <Route path="/party" element={<PartyPage />} />
        <Route path="/period2" element={<PeriodPage2 />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/map-result" element={<MapResultPage />} />
        <Route path="/detail-result" element={<DetailResultPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:region_id" element={<DetailedDestPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
