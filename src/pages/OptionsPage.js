import React, { useState } from "react";
import PlainHeader from "../components/PlainHeder";
import { styled } from "styled-components";
import check from "../assets/common/selected.png";
import { useNavigate } from "react-router-dom";

const OptionsPage = () => {
  const navigate = useNavigate();
  const options = ["Travel Itinerary", "Travel Destination", "Get Directions"];
  const [selected, setSelected] = useState("");

  return (
    <Wrapper>
      <PlainHeader />
      <div className="title">Options</div>

      {options.map((el) => {
        return (
          <Option
            onClick={() => {
              selected === el ? setSelected("") : setSelected(el);
            }}
            $isSelected={selected === el ? "true" : "false"}
          >
            <div className="text">{el}</div>
            <div className="btn">
              {selected === el ? (
                <img src={check} alt="" width={"14px"} height={"9px"} />
              ) : null}
            </div>
          </Option>
        );
      })}
      <Button
        onClick={() => {
          if (selected !== "") navigate("/");
        }}
        $color={selected === "" ? "gray" : "black"}
      >
        Next Step
      </Button>
    </Wrapper>
  );
};

export default OptionsPage;
const Button = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 194px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;

  background: ${(props) => (props.$color === "black" ? "#353535" : "#A3A3A3")};

  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Option = styled.div`
  width: 70%;
  height: 30%;
  display: inline-flex;
  padding: 18px 20px 18px 26px;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;

  background: ${(props) => (props.$isSelected === "true" ? "#FFEFEF" : "#fff")};
  box-shadow: 5px 4px 15px -3px rgba(0, 0, 0, 0.25);

  margin-bottom: 2rem;

  color: #121212;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  .text {
    color: ${(props) => (props.$isSelected === "true" ? "#E84848" : "")};
  }
  .btn {
    width: 33px;
    height: 33px;
    border-radius: 33px;

    background: ${(props) =>
      props.$isSelected === "true"
        ? "var(--circle, #fff)"
        : "var(--circle, #f5f5f5)"};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    height: 61px;
    color: #121212;
    text-align: center;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 50px;
  }
`;
