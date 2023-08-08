import React from "react";
import { styled } from "styled-components";

const Info = ({ title, detail }) => {
  const formatExplanation = (isLast, detail) => {
    if (isLast) {
      return detail.substr(11);
    } else {
      const index = detail.indexOf("Here");
      return detail.substr(0, index);
    }
  };
  return (
    <Wrapper>
      <div className="title">{title}</div>
      {detail && (
        <div className="explanation">
          {formatExplanation(0, detail[0])}
          <br />
          <br />
          {formatExplanation(1, detail[detail.length - 1])}
        </div>
      )}
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
