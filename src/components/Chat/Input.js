import send from "../../assets/chat/send.png";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { PostChats } from "../../api/chat";

const Input = ({
  room_id,
  onUserSend,
  onCheriResponse,
  autoPost,
  setAutoPost,
  setIsLoading,
}) => {
  const [tempText, setTempText] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setTempText(e.target.value);
    setText(e.target.value);
  };

  // 엔터쳐도 보내지도록
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      postChat();
    }
  };

  // 질문 답변 생성
  const postChat = async () => {
    try {
      setText("");
      setIsLoading(true);
      onUserSend(tempText);
      const res = await PostChats(tempText, room_id);
      setTempText("");
      onCheriResponse(res.answer.contents);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // 자동 질문, 답변 생성
  useEffect(() => {
    const postAutoChat = async () => {
      try {
        setText("");
        onUserSend(autoPost);
        const res = await PostChats(autoPost, room_id);
        setTempText("");
        onCheriResponse(res.answer.contents);
      } catch (error) {
        console.log(error);
      }
    };

    if (autoPost) {
      postAutoChat();
      setAutoPost("");
    }
  }, [autoPost]);

  return (
    <Container>
      <InputField
        placeholder="Please enter a text..."
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={text}
      />
      <Send src={send} onClick={postChat} />
    </Container>
  );
};

const InputField = styled.input`
  width: 19.5rem;
  height: 3.3rem;
  border-radius: 28px;
  border: 1px solid #d1d1d1;
  padding-left: 2rem;
  outline: none;
  margin-right: 1rem;

  @media (min-width: 600px) {
    width: 30rem;
  }
  @media (min-width: 1090px) {
    width: 50rem;
  }
`;

const Send = styled.img`
  width: 2.5rem;
`;

const Container = styled.div`
  width: 100vw;
  height: 5.5rem;
  background: #fff;
  box-shadow: 0px -3px 27px 0px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Input;
