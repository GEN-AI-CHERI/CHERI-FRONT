import styled from "styled-components";
import { useState } from "react";
import check from "../../assets/theme/check.png";

const Option = ({ text }) => {
  const [isSelect, setIsSelect] = useState(false);

  const handleSelect = () => {
    setIsSelect(!isSelect);
  };

  return (
    <ThemeOption
      width={text.length}
      onClick={handleSelect}
      disabled={isSelect ? "Selected" : "notSelected"}
    >
      {isSelect && <CheckIcon src={check} />}
      {text}
    </ThemeOption>
  );
};

const ThemeOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => Math.min(props.width * 1.2, 6.2)}rem;
  height: 1.9rem;
  padding: 8px 10px 8px 10px;
  border-radius: 36px;
  display: inline-block;
  text-align: center;
  background-color: ${(props) =>
    props.disabled === "Selected" ? "#FFEFEF" : "white"};
  box-shadow: 5px 4px 15px -3px rgba(0, 0, 0, 0.25);
  border: none;
  font-size: 1.1rem;
  color: ${(props) => (props.disabled === "Selected" ? "#E84848" : "#353535")};
  font-weight: 400;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const CheckIcon = styled.img`
  width: 1rem;
  margin: 0;
  margin-right: 5px;
`;

export default Option;
