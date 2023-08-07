import { combineReducers } from "redux";
import ItineraryReducer from "./Itinerary/reducer";
import DestinationReducer from "./Destination/reducer";

const rootReducer = combineReducers({
  itinerary: ItineraryReducer,
  destination: DestinationReducer,
});

export default rootReducer;
