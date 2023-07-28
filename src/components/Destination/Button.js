import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleNavigatePrev = () => {
    navigate(-1);
  };

  const handleNavigateNext = () => {
    navigate("/themes");
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
