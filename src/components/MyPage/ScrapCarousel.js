import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { styled } from "styled-components";
import { useState } from "react";

const ScrapCarousel = () => {
  const [scraps, setScraps] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <Wrapper>
      <div className="container">
        <StyledSlider {...settings}>
          {scraps.map(() => {
            return (
              <Card>
                <img src="" alt="" />
              </Card>
            );
          })}
        </StyledSlider>
      </div>
    </Wrapper>
  );
};

export default ScrapCarousel;

const settings = {
  className: "scrapList",
  infinite: false,
  slidesToShow: 5,
  speed: 500,
  arrows: true,
  accessivility: true,
  variableWidth: false,
  draggable: false,
  autoplay: false,
  centerMode: false,
  row: 1,
  //화면 넓이에 따른 반응형 옵션
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        centerMode: false,
      },
    },
  ],
};

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 650px;
  }
`;

const Card = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    filter: grayscale(50%);
  }
`;
const StyledSlider = styled(Slider)`
  width: 100%;
  .slick-prev {
    left: 0.5rem;
    z-index: 1;
  }
  .slick-next {
    right: 0.5rem;
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
    width: 100%;
    height: 100px;
  }

  .slick-slide {
    //각 카드 스타일링
    display: flex;
    align-items: center;
    justify-content: center;
    //카드 사이 간격

    width: 93px;
    height: 93px;

    :hover div {
      transform: scale(1.03);
    }
    div {
      //자식인 Card 컴포넌트
      width: 93px;
      height: 93px;
      border-radius: 20px;
      background: lightgray 50% / cover no-repeat;
    }
  }
`;
