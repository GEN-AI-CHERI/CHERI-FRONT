import React from "react";
import Header from "../../components/Main/Header";
import Carousel from "../../components/Main/Carousel";
import Infos from "../../components/Main/Infos";
import scrollBtn from "../../assets/main/scrollBtn.png";
import { styled } from "styled-components";

const MainPage = () => {
  const scrollToGreen = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header />
      <Carousel />
      <Infos />
      <ScrollBtn onClick={scrollToGreen}>
        <img src={scrollBtn} alt="scroll" />
      </ScrollBtn>
    </>
  );
};

export default MainPage;
const ScrollBtn = styled.div`
  display: none;
  @media (min-height: 799px) {
    display: block;
    position: absolute;
    top: 93vh;
    right: 4vw;
    z-index: 1;
    img {
      width: 40px;
      height: 40px;
    }
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
