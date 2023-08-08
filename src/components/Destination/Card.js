import { styled } from "styled-components";
import bookmark from "../../assets/destination/Bookmark.png";
import Check from "../../assets/destination/send.png";
import { useState, useEffect } from "react";

const Card = ({
  title,
  description,
  region_id,
  photo,
  setRegionId,
  chosenId,
  setIsContinue,
  isContinue,
}) => {
  const [isSelect, setIsSelect] = useState(false);

  const handleSelect = () => {
    setIsSelect(!isSelect);
    setRegionId(region_id);
    setIsContinue(!isContinue);
  };

  // 중복 선택 제한
  useEffect(() => {
    if (region_id !== chosenId) {
      setIsSelect(false);
    }
  }, [chosenId]);

  return (
    <Container
      onClick={handleSelect}
      disabled={isSelect ? "Selected" : "notSelected"}
    >
      <Img src={photo} />
      <TextContainer>
        <Row>
          <Location>{title}</Location>
          <BookMarkContainer>
            <BookMark src={bookmark} />
            <Num>108</Num>
          </BookMarkContainer>
        </Row>
        <Row>
          <Summary>{description}</Summary>
          {isSelect && <CheckIcon src={Check} />}
        </Row>
      </TextContainer>
    </Container>
  );
};

const CheckIcon = styled.img`
  width: 2rem;
  margin-left: 19.5rem;
  margin-top: 4.7rem;
  position: absolute;
`;

const BookMarkContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25rem;
  border-radius: 34.583px;
  background-color: ${(props) =>
    props.disabled === "Selected" ? "#FFEFEF" : "white"};
  margin-bottom: 2rem;
  padding-bottom: 3rem;
  padding-top: 1.2rem;
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
  align-self: center;
  border-radius: 31px;
`;

const TextContainer = styled.div`
  margin-left: 2rem;
  margin-top: 1rem;
  margin-right: 2rem;
`;

const BookMark = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  margin-top: 0.3rem;
  margin-right: 0.2rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Summary = styled(Num)`
  font-size: 0.9rem;
`;

export default Card;
