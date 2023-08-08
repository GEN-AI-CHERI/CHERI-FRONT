import cheri from "../../assets/chat/cheri_profile.png";
import styled from "styled-components";
import Itinerary from "./Itinerary";
import Question from "./Question";

const CheriSpeech = ({
  title,
  itinerary,
  question,
  text,
  setAutoPost,
  src,
}) => {
  // 응답값 배열로 오는지 확인하기 위해
  let arr_res = [];
  if (text) {
    arr_res = JSON.stringify(text).slice(2, -2).split('","');
  }

  return (
    <Row>
      <CheriIcon src={cheri} />
      <Column>
        <Name>CHERI</Name>
        <SpeechBubble>
          {title && itinerary && question && (
            <>
              <Title>{title}</Title>
              {itinerary.map((item, idx) => (
                <Itinerary
                  key={idx}
                  day={item.day}
                  description={item.description}
                  places={item.places}
                />
              ))}
              <p>💁🏻‍♀️ Recommended Questions</p>
              {question.map((q, idx) => (
                <Question key={idx} question={q} setAutoPost={setAutoPost} />
              ))}
            </>
          )}
          {text && arr_res.length > 1 ? (
            arr_res.map((text, idx) => <p key={idx}>{text}</p>)
          ) : (
            <p>{text}</p>
          )}
          {src && <ChatLoading src={src} />}
        </SpeechBubble>
      </Column>
    </Row>
  );
};

const ChatLoading = styled.img`
  width: 3rem;
`;

const Title = styled.h3`
  margin-top: 0;
`;

const CheriIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
  margin-top: 1.5rem;
`;

const Name = styled.p`
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

const SpeechBubble = styled.div`
  max-width: 18rem;
  background-color: #f9f7f7;
  padding: 1.1rem;
  border-radius: 10px;
  color: #232323;
  margin-left: 0.5rem;
  font-size: 0.85rem;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CheriSpeech;
