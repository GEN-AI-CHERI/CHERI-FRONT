import React from "react";
import { styled } from "styled-components";
import Header from "../components/Detail/Header";
import Info from "../components/Detail/Info";
import Carousel from "../components/Detail/Carousel";
const DetailedDestPage = () => {
  return (
    <Wrapper>
      <Header />
      <Info />
      <div className="popular">
        <div className="text">Popular Activities</div>
        <Carousel />
      </div>
    </Wrapper>
  );
};

export default DetailedDestPage;

const Wrapper = styled.div`
  @media (min-width: 768px) {
    //margin: 0vh 20vw; //pc일때 마진
  }
  .text {
    padding: 0 1.5rem;
    margin-top: 4rem;
    color: #121212;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 110% */
  }
  .popular {
  }
`;
