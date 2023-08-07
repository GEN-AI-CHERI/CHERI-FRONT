// 여행지 추천 기능 -> 사용자 입력사항 저장용
const initialState = {
  with_who: "",
  age: "",
  theme: [],
  begin_date: "",
  end_date: "",
};

function DestinationReducer(currentState = initialState, action) {
  switch (action.type) {
    case "SET_PARTY":
      return {
        ...currentState,
        with_who: action.payload,
      };
    case "SET_AGE":
      return {
        ...currentState,
        age: action.payload,
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
    default:
      return currentState;
  }
}

export default DestinationReducer;
