import React from "react";
import { styled } from "styled-components";
import gptXcheri from "../../assets/main/gptXcheri.png";
import check from "../../assets/main/check.png";
import directionImg from "../../assets/main/directionImg.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import seoul from "../../assets/main/seoul.png";
import busan from "../../assets/main/busan.png";
import jeju from "../../assets/main/jeju.png";

const Infos = () => {
  const navigate = useNavigate();

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
          <div
            onClick={() => {
              navigate("/menu");
            }}
            className="startBtn"
          >
            Start Now
          </div>
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
                With friends
              </div>
              <div className="option">
                <img src={check} alt=""></img>2 nights 3 days
              </div>
              <div className="option">
                <img src={check} alt=""></img>
                30 ~ 39 age
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
          <div className="text">Guide Recommendations</div>
          <div className="list">
            <div className="dest">
              <img src={seoul} alt=""></img>
              <div className="filter" />
              <div className="title">Seoul</div>
            </div>
            <div className="dest">
              <img src={busan} alt=""></img>
              <div className="filter" />
              <div className="title">Busan</div>
            </div>
            <div className="dest">
              <img src={jeju} alt=""></img>
              <div className="filter" />
              <div className="title">Jeju Island</div>
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
    padding-top: 30px;
    color: #000;
    text-align: center;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 110% */
  }
  .subIntro {
    width: 90%;
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
    margin-top: 30px;
    width: 8rem;
    height: 40px;
    border-radius: 25px;
    background: #353535;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-family: Inter;
    font-size: 1rem;
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
  .dest {
    position: relative;
    overflow: hidden;
    @media (min-width: 768px) {
      width: 30rem;
    }
    width: 21.5rem;
    height: 119px;
    border-radius: 23px;
    margin-bottom: 7px;

    img {
      @media (min-width: 768px) {
        width: 30rem;
      }
      width: 21.5rem;
      height: 119px;
    }
    .title {
      position: absolute;
      top: 35%;
      left: 10%;
      color: #fff;
      text-align: center;
      font-family: Cygre SemiBold;
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    .filter {
      position: absolute;
      top: 0;
      background: rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 100%;
    }
  }
`;
