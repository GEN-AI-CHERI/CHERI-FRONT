import cheri from "../../assets/chat/cheri_profile.png";
import styled from "styled-components";

const CheriSpeech = ({ text }) => {
  return (
    <Row>
      <CheriIcon src={cheri} />
      <Column>
        <Name>CHERI</Name>
        <SpeechBubble>{text}</SpeechBubble>
      </Column>
    </Row>
  );
};

const CheriIcon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 1rem;
  margin-top: 1.5rem;
`;

const Name = styled.p`
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

const SpeechBubble = styled.div`
  width: 17rem;
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
