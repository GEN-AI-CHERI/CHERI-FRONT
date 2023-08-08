import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import location from "../../assets/detail/location.png";
import exampleImg from "../../assets/detail/exampleImg.png";
import { styled } from "styled-components";
import { useState } from "react";

const Carousel = () => {
  const [scraps, setScraps] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <Wrapper>
      <div className="container">
        <StyledSlider {...settings}>
          {scraps.map((index) => {
            return (
              <Card key={index}>
                <img src={exampleImg} alt="" />
                <div className="info">
                  <div className="name">Activity</div>
                  <div className="location">
                    <img className="icon" alt="" src={location} />
                    Location
                  </div>
                </div>
              </Card>
            );
          })}
        </StyledSlider>
      </div>
    </Wrapper>
  );
};

export default Carousel;

const settings = {
  className: "center",
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  arrows: true,
  accessivility: true,
  variableWidth: true,
  draggable: false,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "50px", //디폴트값
  pauseOnHover: true, // hover시 정지
  //화면 넓이에 따른 반응형 옵션
};
const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 0.01%,
    rgba(217, 217, 217, 0) 0.02%,
    rgba(224, 224, 224, 0.29) 99.99%,
    #f3f3f3 100%
  );
  width: 100%;
  height: 450px;

  margin-top: 2rem;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  .slick-prev {
    width: 2rem;
    height: 2rem;
    left: 1vw;
    z-index: 1;
    @media (min-width: 768px) {
      left: 0.5rem;
    }
  }
  .slick-next {
    width: 2rem;
    height: 2rem;
    left: 92vw;
    @media (min-width: 768px) {
      left: 95%;
    }
  }
  .slick-prev:before {
    font-size: 1.5rem;
    color: rgba(58, 58, 58, 0.8);
    opacity: 5;
  }
  .slick-next:before {
    font-size: 1.5rem;
    color: rgba(58, 58, 58, 0.8);
    opacity: 5;
  }

  .slick-list {
    //화면에 보여지는 부분
    margin: 0;
  }

  .slick-slide {
    //각 카드 스타일링

    width: 240px; //얘가 통일 돼야 정렬됨
    height: 310px;
    display: flex;
    align-items: center;
    justify-content: center;
    //카드 사이 간격

    :hover div {
      transform: scale(1.03);
    }
  }
`;
const Card = styled.div`
  cursor: pointer;
  width: 210px;
  height: 305px;
  border-radius: 30px;

  img {
    width: 210px;
    height: 218px;
    border-radius: 30px 30px 0px 0px;
  }

  .info {
    padding-top: 0.5rem;
    width: 210px;
    height: 87px;
    border-radius: 0px 0px 30px 30px;
    background: var(--white, #fff);

    .name {
      color: var(--textclr, #5e6282);
      font-size: 13px;
      margin-left: 1rem;
      font-weight: 700;
      line-height: 22px; /* 169.231% */
    }
    .location {
      color: var(--textclr, #5e6282);
      margin-left: 0.7rem;
      font-size: 11px;
      font-weight: 400;
      line-height: 22px; /* 200% */

      display: flex;
      align-items: center;
    }
    .icon {
      width: 15px;
      height: 17px;
      margin-right: 0.2rem;
    }
  }
`;
