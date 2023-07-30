import { styled } from "styled-components";
import ex from "../../assets/destination/ex.png";
import bookmark from "../../assets/destination/Bookmark.png";
import Check from "../../assets/destination/send.png";
import { useState } from "react";

const Card = () => {
  const [isSelect, setIsSelect] = useState(false);

  const handleSelect = () => {
    setIsSelect(!isSelect);
  };

  return (
    <Container
      onClick={handleSelect}
      disabled={isSelect ? "Selected" : "notSelected"}
    >
      <Img src={ex} />
      <TextContainer>
        <Location>Seoul</Location>
        <Row>
          <BookMark src={bookmark} />
          <Num>108</Num>
          <Line> | </Line>
          <Summary> The capital of South Korea</Summary>
          {isSelect && <CheckIcon src={Check} />}
        </Row>
      </TextContainer>
    </Container>
  );
};

const CheckIcon = styled.img`
  width: 2rem;
  margin-left: 3.4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25rem;
  height: 19rem;
  border-radius: 34.583px;
  background-color: ${(props) =>
    props.disabled === "Selected" ? "#FFEFEF" : "white"};
  margin-bottom: 25px;
  cursor: pointer;
  box-shadow: 0px 2.4631879329681396px 4.187419891357422px 0px rgba(0, 0, 0, 0),
    0px 10.838027954101562px 8.67042064666748px 0px rgba(0, 0, 0, 0.01),
    0px 26.60243034362793px 17.291582107543945px 0px rgba(0, 0, 0, 0.01),
    0px 51.234317779541016px 33.893463134765625px 0px rgba(0, 0, 0, 0.01),
    0px 86.2115707397461px 62.318668365478516px 0px rgba(0, 0, 0, 0.02),
    0px 133.0121612548828px 106.40972137451172px 0px rgba(0, 0, 0, 0.02);
`;

const Img = styled.img`
  width: 21.8rem;
  height: 11rem;
  margin-top: -12px;
  align-self: center;
`;

const TextContainer = styled.div`
  margin-left: 2rem;
  margin-top: 1rem;
`;

const BookMark = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  margin-top: 0.3rem;
  margin-right: 0.2rem;
`;

const Row = styled.div`
  display: flex;
`;

const Location = styled.h3`
  margin-top: 0;
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
`;

const Num = styled.p`
  margin: 0;
  color: #84829a;
`;

const Line = styled(Num)`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Summary = styled(Num)``;

export default Card;
