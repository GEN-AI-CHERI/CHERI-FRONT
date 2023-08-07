import loadingIcon from "../../assets/common/loading.gif";
import infoIcon from "../../assets/common/info.png";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetMyChat } from "../../api/chat";
import { useParams } from "react-router-dom";
const LoadingSavedPage = () => {
  const navigate = useNavigate();
  const { room_id } = useParams();

  const handleNavigate = () => {
    navigate(`/my-chat/${room_id}`);
  };

  const GetChatData = async () => {
    const res = await GetMyChat(room_id);
    //첫번째 리스트 따로 저장
    localStorage.setItem(
      "firstSavedData",
      JSON.stringify(res.chats[0].contents)
    );
    //첫메세지 삭제후 나머지 리스트 저장
    res.chats.shift();
    localStorage.setItem("savedData", JSON.stringify(res.chats));

    handleNavigate();
    window.location.reload();
  };
  useEffect(() => {
    GetChatData();
  }, []);

  return (
    <Container>
      <LoadingIcon src={loadingIcon} />
      <InfoContainer>
        <Info src={infoIcon} />
        <H2>Do you know? </H2>
      </InfoContainer>
      <Des>
        You can receive recommendations for tour guides operating in your
        selected travel destinations.
      </Des>
      <P> Generating results..</P>
    </Container>
  );
};

const Des = styled.p`
  text-align: center;
  width: 25rem;
  color: #3f3f3f;
`;

const Info = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.5rem;
  margin-top: 0.3rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  color: #595959;
  margin: 0;
  font-size: 1.3rem;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14rem;
`;

const LoadingIcon = styled.img`
  width: 14rem;
`;

const P = styled.p`
  font-size: 1.3rem;
  color: #121212;
  position: absolute;
  bottom: 5rem;
`;

export default LoadingSavedPage;
