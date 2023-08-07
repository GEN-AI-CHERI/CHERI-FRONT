import React from "react";
import { styled } from "styled-components";

const Info = ({ title, description }) => {
  return (
    <Wrapper>
      <div className="title">{title}</div>
      <div className="explanation">{description}</div>
    </Wrapper>
  );
};

export default Info;
const Wrapper = styled.div`
  padding: 1.8rem 1.5rem;
  text-align: justify;
  .title {
    color: #121212;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 22px; /* 100% */
  }
  .explanation {
    margin-top: 2rem;
    color: #6f7789;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 17px; /* 141.667% */
  }
`;
