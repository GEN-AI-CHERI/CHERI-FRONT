import ChatHeader from "../../components/Chat/ChatHeader";
import CheriSpeech from "../../components/Chat/CheriSpeech";
import UserSpeech from "../../components/Chat/UserSpeech";
import styled from "styled-components";
import { useEffect, useState } from "react";
import React from "react";

const MyChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [firstContents, setFirstContents] = useState({});

  useEffect(() => {
    setFirstContents(JSON.parse(localStorage.getItem("firstSavedData")));
    setMessages(JSON.parse(localStorage.getItem("savedData")));

    return () => {
      localStorage.setItem("firstSavedData", null);
      localStorage.setItem("savedData", null);
    };
  }, []);

  return (
    <>
      <ChatHeader />
      <BG>
        <CheriSpeech
          title={firstContents.plan}
          itinerary={firstContents.itinerary}
          question={firstContents.recommend_next_questions}
        />
        {messages &&
          messages.map((message) => {
            return message.isQuestion ? (
              <UserSpeech key={message.chat_id} text={message.contents} />
            ) : (
              <CheriSpeech key={message.chat_id} text={message.contents} />
            );
          })}
      </BG>
    </>
  );
};

const BG = styled.div`
  width: 100vw;
  margin-bottom: 8rem;
  margin-top: 5rem;
`;

export default MyChatPage;
