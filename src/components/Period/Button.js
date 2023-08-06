import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setBeginPeriod,
  setEndPeriod,
  setAge,
} from "../../Redux/itinerary_action";

const Button = ({ beginDate, endDate, age }) => {
  const dispatch = useDispatch();

  // period, age 값을 변경하는 액션 디스패치
  const handleSetPeriodAndAge = (startdate, lastdate, age) => {
    dispatch(setBeginPeriod(startdate));
    dispatch(setEndPeriod(lastdate));
    dispatch(setAge(age));
  };

  const navigate = useNavigate();

  const handleNavigatePrev = () => {
    handleSetPeriodAndAge("", "", 0);
    navigate(-1);
  };

  const handleNavigateNext = () => {
    handleSetPeriodAndAge(beginDate, endDate, age);
    navigate(`/loading`);
  };

  return (
    <BtnContainer>
      <PrevBtn onClick={handleNavigatePrev}>Prev</PrevBtn>
      <NextBtn onClick={handleNavigateNext}>Next</NextBtn>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const PrevBtn = styled.button`
  width: 10rem;
  height: 4rem;
  border-radius: 32px;
  background: #a3a3a3;
  color: white;
  border: none;
  font-size: 1.2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const NextBtn = styled(PrevBtn)`
  background: #353535;
`;

export default Button;
