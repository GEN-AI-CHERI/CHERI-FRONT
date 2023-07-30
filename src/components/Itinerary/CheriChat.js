import { styled } from "styled-components";
import cheri from "../../assets/chat/cheri_profile.png";
import { useNavigate } from "react-router-dom";

const CheriChat = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Message>More Information?</Message>
      <Cheri src={cheri} onClick={() => navigate("/chat")} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 1.5rem;
`;

const Message = styled.div`
  width: 6.5rem;
  height: 3.8rem;
  border-radius: 18px;
  background: #fff;
  box-shadow: 5px 4px 15px -3px rgba(0, 0, 0, 0.25);
  padding-left: 1.3rem;
  padding-top: 0.5rem;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
`;

const Cheri = styled.img`
  width: 3.5rem;
`;

export default CheriChat;
