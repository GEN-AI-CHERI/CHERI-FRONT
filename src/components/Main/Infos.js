import React from "react";
import { styled } from "styled-components";

const Infos = () => {
  return (
    <>
      <Wrapper>
        <div className="intro">Travel Itinerary, Tailored to Your Tastes</div>
        <div className="subIntro">
          Leverage the power of ChatGPT to curate your next vacation.
        </div>
        <div className="gptNcheri">
          <img src={""} alt=""></img>
        </div>
        <div className="startBtn">Start Now</div>
      </Wrapper>
      <Wrapper>
        <div className="intro">A Planner that Gets You</div>
        <div className="subIntro">
          Travel destinations based on your purpose, age, gender, etc.
        </div>
        <div className="options">
          <div className="option">
            <img src={""} alt=""></img>
            City breaks
          </div>
          <div className="option">
            <img src={""} alt=""></img>
            20 ~ 29 age
          </div>
          <div className="option">
            <img src={""} alt=""></img>
            Woman
          </div>
          <div className="option">
            <img src={""} alt=""></img>
            With two friends
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="intro">Get Precise Directions</div>
        <div className="subIntro">
          Are you facing difficulties due to transportation?
        </div>
        <div className="directionImg">
          <img src={""} alt=""></img>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="intro">Explore popular destinations</div>
        <div className="subIntro">
          Are you facing difficulties due to transportation?
        </div>
        <div className="directionImg">
          <img src={""} alt=""></img>
        </div>
      </Wrapper>
      <Destinations>
        <div className="text">Explore popular destinations</div>
        <div className="list">
          <div className="item">
            <img src={""} alt=""></img>
            <img src={""} alt=""></img>
            <img src={""} alt=""></img>
          </div>
        </div>
      </Destinations>
    </>
  );
};

export default Infos;

const Wrapper = styled.div`
  padding-top: 35px 0;
  width: 100%;
  height: 305px;
`;

const Destinations = styled.div`
  margin-top: 35px;
`;
