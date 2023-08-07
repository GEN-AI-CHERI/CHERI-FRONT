import React, { useState } from "react";
import PlainHeader from "../components/PlainHeder";
import { styled } from "styled-components";
import check from "../assets/menu/check.png";
import emptyBtn from "../assets/menu/emptyBtn.png";
import { useNavigate } from "react-router-dom";
import airplane from "../assets/menu/airplane.png";
import building from "../assets/menu/building.png";
const OptionsPage = () => {
  const navigate = useNavigate();
  const options = [
    {
      id: 1,
      icon: airplane,
      title: "Travel Itinerary",
      explanation:
        "CHERI's AI chatbot provides tailored travel plans just for you! Get your ideal itinerary!",
    },
    {
      id: 2,
      icon: building,
      title: "Travel Destination",
      explanation:
        "Discover a personalized travel suggestion in Korea with CHERI! Find your perfect destination match!",
    },
  ];
  const [selected, setSelected] = useState("");

  return (
    <Wrapper>
      <PlainHeader />
      <div className="title">Options</div>

      {options.map((option) => {
        return (
          <Option
            onClick={() => {
              selected === option.title
                ? setSelected("")
                : setSelected(option.title);
            }}
            $isSelected={selected === option.title ? "true" : "false"}
          >
            <div className="upper">
              <div className="icon">
                <img src={option.icon} alt="" />
              </div>

              <div className="optionTitle">{option.title}</div>

              <div className="btn">
                {selected === option.title ? (
                  <img src={check} alt="" />
                ) : (
                  <img src={emptyBtn} alt="" />
                )}
              </div>
            </div>
            <div className="explanation">{option.explanation}</div>
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
  width: 85%;
  max-width: 336px;
  min-height: ${(props) => (props.$isSelected === "true" ? "143px" : "103px")};
  display: flex;
  flex-direction: column;

  border-radius: 20px;

  background: ${(props) => (props.$isSelected === "true" ? "#FFEFEF" : "#fff")};
  box-shadow: 5px 4px 15px -3px rgba(0, 0, 0, 0.25);

  margin-bottom: 2rem;

  .upper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .btn {
    margin-top: 18.5px;
    margin-right: 16px;
    img {
      width: 26px;
      height: 26px;
    }
  }

  .optionTitle {
    color: ${(props) => (props.$isSelected === "true" ? "#E84848" : "")};
    width: 236px;
    color: #121212;
    text-align: start;
    font-size: 18px;
    font-weight: 700;
    margin-left: 15px;
    margin-top: 15px;
  }
  .explanation {
    margin-left: 67px;
    width: 70%;
    color: #828282;
    font-size: 10px;
    font-weight: 400;
  }

  .icon {
    margin-left: 21px;
    margin-top: 19px;
    img {
      width: 30px;
      height: 30px;
    }
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
