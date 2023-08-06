import ChatHeader from "../components/Chat/ChatHeader";
import CheriSpeech from "../components/Chat/CheriSpeech";
import UserSpeech from "../components/Chat/UserSpeech";
import Input from "../components/Chat/Input";
import styled from "styled-components";

const ChatPage = () => {
  const storedData = JSON.parse(localStorage.getItem("res"));
  console.log("결과", storedData);

  const room_id = storedData.room_id;
  const chat_id = storedData.chat_id;
  const title = storedData.message.plan;
  const itinerary = storedData.message.itinerary;
  const question = storedData.message.recommend_next_questions;

  return (
    <BG>
      <ChatHeader />
      <CheriSpeech
        key={chat_id}
        title={title}
        itinerary={itinerary}
        question={question}
      />
      <Input />
    </BG>
  );
};

const BG = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default ChatPage;
