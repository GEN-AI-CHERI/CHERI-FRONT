import styled from "styled-components";
import { useState, useEffect } from "react";
import check from "../../assets/theme/check.png";

const Age = ({ setAge, item, selectedAge, setIsContinue, isContinue }) => {
  const [isSelect, setIsSelect] = useState(false);

  const handleSelect = () => {
    setIsSelect(!isSelect);
    setAge(item);
    setIsContinue(!isContinue);
  };

  // 중복 선택 제한
  useEffect(() => {
    if (item !== selectedAge) {
      setIsSelect(false);
    }
  }, [selectedAge]);

  return (
    <Container
      onClick={handleSelect}
      disabled={isSelect ? "Selected" : "notSelected"}
    >
      {isSelect && <CheckIcon src={check} />}
      <Option disabled={isSelect ? "Selected" : "notSelected"}>{item}</Option>
      <Frame disabled={isSelect ? "Selected" : "notSelected"} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.1rem;
  background-color: ${(props) =>
    props.disabled === "Selected" ? "#FFEFEF" : "white"};
  margin-left: 3.2rem;
  margin-right: 3.2rem;
  cursor: pointer;
`;

const CheckIcon = styled.img`
  width: 1rem;
  margin: 0;
  margin-right: 5px;
`;

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

export default Age;
