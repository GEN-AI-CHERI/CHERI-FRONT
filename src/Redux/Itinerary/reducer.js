// 여행 코스 추천 기능 -> 사용자 입력사항 저장용
const initialState = {
  age: "",
  theme: [],
  begin_date: "",
  end_date: "",
  region_id: 0,
};

function ItineraryReducer(currentState = initialState, action) {
  switch (action.type) {
    case "SET_REGION_ID":
      return {
        ...currentState,
        region_id: action.payload,
      };
    case "SET_THEMES":
      return {
        ...currentState,
        theme: action.payload,
      };
    case "SET_BEGIN_PERIOD":
      return {
        ...currentState,
        begin_date: action.payload,
      };
    case "SET_END_PERIOD":
      return {
        ...currentState,
        end_date: action.payload,
      };
    case "SET_AGE":
      return {
        ...currentState,
        age: action.payload,
      };
    default:
      return currentState;
  }
}

export default ItineraryReducer;
