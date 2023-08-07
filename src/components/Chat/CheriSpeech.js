import cheri from "../../assets/chat/cheri_profile.png";
import styled from "styled-components";
import Itinerary from "./Itinerary";
import Question from "./Question";

const CheriSpeech = ({ title, itinerary, question, text, setAutoPost }) => {
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
              {question.map((q) => (
                <Question question={q} setAutoPost={setAutoPost} />
              ))}
            </>
          )}
          {text && <p>{text}</p>}
        </SpeechBubble>
      </Column>
    </Row>
  );
};

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
  width: 18rem;
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
