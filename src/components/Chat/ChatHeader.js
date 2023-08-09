import backIcon from "../../assets/chat/backIcon.png";
import flag from "../../assets/chat/flag-1.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ChatHeader = ({ isSaved = false, region_id }) => {
  const navigate = useNavigate();

  const hanldeNavigate = () => {
    isSaved ? navigate("/mypage") : navigate("/");
  };

  return (
    <Container>
      <BackIcon src={backIcon} onClick={hanldeNavigate} />
      <Flag src={flag} onClick={() => navigate(`/guide-list/${region_id}`)} />
    </Container>
  );
};

const Flag = styled.img`
  width: 2.8rem;
  margin-right: 1.5rem;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

const BackIcon = styled.img`
  width: 2.5rem;
  margin-left: 1.5em;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #ffefef;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ChatHeader;
