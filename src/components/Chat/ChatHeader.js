import backIcon from "../../assets/chat/backIcon.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const navigate = useNavigate();

  const hanldeNavigate = () => {
    navigate("/");
  };

  return (
    <Container>
      <BackIcon src={backIcon} onClick={hanldeNavigate} />
    </Container>
  );
};

const BackIcon = styled.img`
  width: 2.5rem;
  margin-left: 1.5em;
  margin-top: 1.2rem;
`;

const Container = styled.div`
  width: 100vw;
  height: 5rem;
  background-color: #ffefef;
  position: fixed;
  top: 0;
`;

export default ChatHeader;
