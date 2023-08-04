import React from "react";
import { styled } from "styled-components";

const Info = () => {
  return (
    <Wrapper>
      <div className="title">Busan</div>
      <div className="explanation">
        Busan, a large port city in South Korea, is known for its beaches,
        mountains and temples. Busy Haeundae Beach features the Sea Life
        Aquarium, plus a Folk Square with traditional games such as tug-of-war,
        while Gwangalli Beach has many bars and views of modern Diamond Bridge.
      </div>
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
