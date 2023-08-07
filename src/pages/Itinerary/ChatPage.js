import ChatHeader from "../../components/Chat/ChatHeader";
import CheriSpeech from "../../components/Chat/CheriSpeech";
import UserSpeech from "../../components/Chat/UserSpeech";
import Input from "../../components/Chat/Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import React from "react";

const ChatPage = () => {
  const [userMessages, setUserMessages] = useState([]); // 사용자 메시지 배열
  const [cheriMessages, setCheriMessages] = useState([]); // 케리 응답 배열
  const [autoPost, setAutoPost] = useState("");

  const storedData = JSON.parse(localStorage.getItem("res"));

  const room_id = storedData.room_id;
  const chat_id = storedData.chat_id;
  const title = storedData.message.plan;
  const itinerary = storedData.message.itinerary;
  const question = storedData.message.recommend_next_questions;

  const handleUserSend = (text) => {
    setUserMessages([...userMessages, text]); // 새로운 사용자 메시지를 배열에 추가
  };

  const handleCheriResponse = (text) => {
    setCheriMessages([...cheriMessages, text]); // 케리 응답을 배열에 추가
  };
  return (
    <>
      <ChatHeader />
      <BG>
        <CheriSpeech
          key={chat_id}
          title={title}
          itinerary={itinerary}
          question={question}
          setAutoPost={setAutoPost}
        />
        {userMessages.map((userMessage, index) => (
          <React.Fragment key={`user_${index}`}>
            <UserSpeech text={userMessage} />
            {cheriMessages[index] && (
              <CheriSpeech text={cheriMessages[index]} />
            )}
          </React.Fragment>
        ))}
      </BG>
      <Input
        room_id={room_id}
        setUserMessages={setUserMessages}
        setCheriMessages={setCheriMessages}
        onUserSend={handleUserSend} // 사용자가 메시지를 보낼 때 호출
        onCheriResponse={handleCheriResponse} // 케리가 응답할 때 호출
        autoPost={autoPost}
        setAutoPost={setAutoPost}
      />
    </>
  );
};

const BG = styled.div`
  width: 100vw;
  margin-bottom: 8rem;
  margin-top: 5rem;
`;

export default ChatPage;
