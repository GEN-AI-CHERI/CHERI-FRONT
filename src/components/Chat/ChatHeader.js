import backIcon from "../../assets/chat/backIcon.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackIcon src={backIcon} onClick={() => navigate("/main")} />
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
`;

export default ChatHeader;