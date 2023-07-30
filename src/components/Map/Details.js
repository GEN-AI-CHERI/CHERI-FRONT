import { styled } from "styled-components";
import redo from "../../assets/map/Redo.png";
import ex from "../../assets/map/ex.png";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>JeonJu Hanok Village</Title>
      <P>
        Cultural village with traditional Korean Hanok houses, plus calligraphy
        & sake museums.
      </P>
      <ImgContainer>
        <Img src={ex} />
        <Img src={ex} />
        <Img src={ex} />
      </ImgContainer>
      <Btn onClick={() => navigate("/route")}>
        Get Directions <Redo src={redo} />
      </Btn>
    </Container>
  );
};

const ImgContainer = styled.div`
  display: flex;
`;

const Redo = styled.img`
  width: 2rem;
  margin-left: 1rem;
`;

const Img = styled.img`
  width: 7.5rem;
  margin-right: 0.5rem;
`;

const Btn = styled.button`
  width: 17rem;
  padding: 16px 25px 16px 25px;
  border: none;
  border-radius: 31px;
  background: #ffefef;
  box-shadow: 5px 4px 15px -3px rgba(0, 0, 0, 0.25);
  color: #e84848;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100vw;
  height: 25rem;
  border-radius: 35px 35px 0px 0px;
  background: #fff;
  box-shadow: 0px -8px 11px 0px rgba(0, 0, 0, 0.11);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 2rem;
`;

const Title = styled.h2`
  align-self: flex-start;
  padding-left: 2rem;
`;

const P = styled.p`
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default Details;
