import styled from "styled-components";
import { useState } from "react";
import check from "../../assets/theme/check.png";

const GainOptions = () => {
  const [isSelect1, setIsSelect1] = useState(false);
  const [isSelect2, setIsSelect2] = useState(false);
  const [isSelect3, setIsSelect3] = useState(false);
  const [isSelect4, setIsSelect4] = useState(false);
  const [isSelect5, setIsSelect5] = useState(false);
  const [isSelect6, setIsSelect6] = useState(false);

  const handleSelect1 = () => {
    setIsSelect1(!isSelect1);
  };

  const handleSelect2 = () => {
    setIsSelect2(!isSelect2);
  };

  const handleSelect3 = () => {
    setIsSelect3(!isSelect3);
  };

  const handleSelect4 = () => {
    setIsSelect4(!isSelect4);
  };

  const handleSelect5 = () => {
    setIsSelect5(!isSelect5);
  };

  const handleSelect6 = () => {
    setIsSelect6(!isSelect6);
  };

  return (
    <AgeContainer>
      <Row>
        <Container
          onClick={handleSelect1}
          disabled={isSelect1 ? "Selected" : "notSelected"}
        >
          {isSelect1 && <CheckIcon src={check} />}
          <Option disabled={isSelect1 ? "Selected" : "notSelected"}>
            Alone
          </Option>
          <Frame disabled={isSelect1 ? "Selected" : "notSelected"} />
        </Container>
        <Container
          onClick={handleSelect2}
          disabled={isSelect2 ? "Selected" : "notSelected"}
        >
          {isSelect2 && <CheckIcon src={check} />}
          <Option disabled={isSelect2 ? "Selected" : "notSelected"}>
            Family
          </Option>
          <Frame disabled={isSelect2 ? "Selected" : "notSelected"} />
        </Container>
      </Row>
      <Row>
        <Container2
          onClick={handleSelect3}
          disabled={isSelect3 ? "Selected" : "notSelected"}
        >
          {isSelect3 && <CheckIcon src={check} />}
          <Option disabled={isSelect3 ? "Selected" : "notSelected"}>
            Friend
          </Option>
          <Frame disabled={isSelect3 ? "Selected" : "notSelected"} />
        </Container2>
        <Container
          onClick={handleSelect4}
          disabled={isSelect4 ? "Selected" : "notSelected"}
        >
          {isSelect4 && <CheckIcon src={check} />}
          <Option disabled={isSelect4 ? "Selected" : "notSelected"}>
            Partner
          </Option>
          <Frame disabled={isSelect4 ? "Selected" : "notSelected"} />
        </Container>
      </Row>
      <Row>
        <Container2
          onClick={handleSelect5}
          disabled={isSelect5 ? "Selected" : "notSelected"}
        >
          {isSelect5 && <CheckIcon src={check} />}
          <Option disabled={isSelect5 ? "Selected" : "notSelected"}>
            Parent
          </Option>
          <Frame disabled={isSelect5 ? "Selected" : "notSelected"} />
        </Container2>
        <Container
          onClick={handleSelect6}
          disabled={isSelect6 ? "Selected" : "notSelected"}
        >
          {isSelect6 && <CheckIcon src={check} />}
          <Option disabled={isSelect6 ? "Selected" : "notSelected"}>etc</Option>
          <Frame disabled={isSelect6 ? "Selected" : "notSelected"} />
        </Container>
      </Row>
    </AgeContainer>
  );
};

const Row = styled.div`
  display: flex;
`;

const CheckIcon = styled.img`
  width: 1rem;
  margin: 0;
  margin-right: 5px;
`;

const AgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15.2rem;
  margin-top: 4.5rem;
`;

const Container = styled.div`
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.1rem;
  margin-left: 3.2rem;
  margin-right: 3.3rem;
  background-color: ${(props) =>
    props.disabled === "Selected" ? "#FFEFEF" : "white"};
`;

const Container2 = styled(Container)``;

const Frame = styled.div`
  width: 9.5rem;
  display: inline-flex;
  height: 3.5rem;
  padding: 18px 13px 18px 4px;
  align-items: center;
  border-radius: 20px;
  background-color: ${(props) =>
    props.disabled === "Selected" ? "#FFEFEF" : "white"};
  box-shadow: 5px 4px 15px -3px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: -1;
`;

const Option = styled.p`
  font-size: 1.4rem;
  color: ${(props) => (props.disabled === "Selected" ? "#E84848" : "#353535")};
`;

export default GainOptions;
