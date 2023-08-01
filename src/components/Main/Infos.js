import React from "react";
import { styled } from "styled-components";
import gptXcheri from "../../assets/main/gptXcheri.png";
import check from "../../assets/main/check.png";
import directionImg from "../../assets/main/directionImg.png";
import Footer from "./Footer";
const Infos = () => {
  return (
    <>
      <Top>
        <Wrapper>
          <div className="intro">
            Travel Itinerary,
            <br />
            Tailored to Your Tastes
          </div>
          <div className="subIntro">
            Leverage the power of ChatGPT to curate your next vacation.
          </div>
          <div className="gptXcheri">
            <img src={gptXcheri} alt=""></img>
          </div>
          <div className="startBtn">Start Now</div>
        </Wrapper>
      </Top>
      <Bottom>
        <Wrapper>
          <div className="greenBack">
            <div className="intro">A Planner that Gets You</div>
            <div className="subIntro">
              Travel destinations based on your purpose, age, gender, etc.
            </div>
            <div className="options">
              <div className="option">
                <img src={check} alt=""></img>
                City breaks
              </div>

              <div className="option">
                <img src={check} alt=""></img>
                20 ~ 29 age
              </div>
              <div className="option">
                <img src={check} alt=""></img>
                Woman
              </div>
              <div className="option">
                <img src={check} alt=""></img>
                With two friends
              </div>
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="intro">Get Precise Directions</div>
          <div className="subIntro">
            Are you facing difficulties due to transportation?
          </div>
          <div className="directionImg">
            <img src={directionImg} alt=""></img>
          </div>
        </Wrapper>
        <Destinations>
          <div className="text">Explore popular destinations</div>
          <div className="list">
            <div className="item">
              <img src={""} alt=""></img>
            </div>
            <div className="item">
              <img src={""} alt=""></img>
            </div>
            <div className="item">
              <img src={""} alt=""></img>
            </div>
          </div>
        </Destinations>
        <Footer />
      </Bottom>
    </>
  );
};

export default Infos;
const Bottom = styled.div`
  width: 100vw;
  //뷰포트 세로 800px 이상인 경우에만 초록배경 뷰포트 높이 아래로
  @media (min-height: 799px) {
    position: absolute;
    top: 100vh;
  }
`;
const Top = styled.div`
  width: 100vw;

  @media (min-height: 799) {
    position: absolute;
    top: 500px;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  padding-bottom: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .intro {
    padding-top: 35px;
    color: #000;
    text-align: center;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 110% */
  }
  .subIntro {
    margin-top: 0.5rem;
    color: #949494;
    text-align: center;
    font-family: Inter;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .gptXcheri {
    margin-top: 24px;

    img {
      width: 164px;
      height: 61px;
    }
  }
  .startBtn {
    margin-top: 3rem;
    width: 8rem;
    height: 40px;
    border-radius: 25px;
    background: #353535;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-family: Inter;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .greenBack {
    width: 100vw;
    padding-top: 50px;
    height: 300px;
    background: #f8fbfb;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .options {
    padding-top: 33px;
  }
  .option {
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      margin-right: 0.9rem;
    }
  }
  .directionImg {
    margin-top: 40px;
    margin-bottom: 20px;
    img {
      width: 206px;
      height: 89px;
    }
  }
`;

const Destinations = styled.div`
  margin-top: 35px;
  .text {
    padding-top: 35px;
    color: #000;
    text-align: center;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 110% */
  }
  .list {
    padding-top: 59.5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 70px;
  }
  .item {
    @media (min-width: 768px) {
      width: 35rem;
      height: 119px;
    }
    width: 21.5rem;
    height: 119px;
    border-radius: 23px;
    background: rgba(0, 0, 0, 0.3);

    margin-bottom: 7px;
  }
`;
