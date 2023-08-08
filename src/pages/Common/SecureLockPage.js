import { styled } from "styled-components";
import lock from "../../assets/common/lock.png";
import moveIcon from "../../assets/common/move.png";
import { useNavigate } from "react-router-dom";

const SecureLockPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LockIcon src={lock} />
      <H2>Secure Lock</H2>
      <P>To view the results, please log in first.</P>
      <Btn onClick={() => navigate("/login")}>
        <p> Login</p> <MoveIcon src={moveIcon} />
      </Btn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13rem;
  height: 100vh;
`;

const MoveIcon = styled.img`
  width: 1.8rem;
  position: absolute;
  left: 18.5rem;
`;

const LockIcon = styled.img`
  width: 12rem;
`;

const P = styled.p`
  color: #4a4a4a;
`;

const H2 = styled.h2`
  margin-bottom: 0;
  margin-top: 2rem;
`;

const Btn = styled.button`
  width: 22rem;
  height: 4rem;
  border-radius: 32px;
  background: #353535;
  color: white;
  font-size: 1.2rem;
  border: none;
  position: absolute;
  bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SecureLockPage;
