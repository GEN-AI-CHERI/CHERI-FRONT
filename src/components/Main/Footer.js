import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="info">
        <div className="title">Informatinon</div>
        <div className="item">
          <p
            onClick={() => {
              window.open(
                "https://www.notion.so/sunnyineverywhere/2023-GEN-AI-9f6940a67dd7463287f0f495d2c0b633?pvs=4",
                "_blank"
              );
            }}
          >
            About us
          </p>
          <p
            onClick={() => {
              window.open("https://github.com/GEN-AI-CHERI", "_blank");
            }}
          >
            Github
          </p>
          <p
            onClick={() => {
              window.open("", "_blank");
            }}
          >
            Privacy policy
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="title">Contact</div>
        <div className="item">Email: cheri3555@gmail.com</div>
      </div>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.div`
  width: 100vw;
  height: 150px;
  background: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 30px;

  .title {
    color: #fff;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 10px;
  }
  .item {
    color: #fff;
    font-family: Inter;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    p {
      margin: 0;
      padding-bottom: 7px;
    }
  }
  .info {
  }
`;
