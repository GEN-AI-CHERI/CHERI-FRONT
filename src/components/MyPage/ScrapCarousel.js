import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
const ScrapCarousel = ({ scraps }) => {
  const navigate = useNavigate();
  let limitNum = 0;
  if (window.matchMedia("(min-width: 400px)").matches) {
    //400px 초과
    limitNum = 5;
    if (matchMedia("screen and (min-width: 640px)").matches) {
      //640px 초과
      limitNum = 4;
    } else {
      //400px 이하
      limitNum = 3;
    }
  }
  return (
    <Wrapper>
      <div className="container">
        {scraps.length > limitNum ? (
          <StyledSlider {...settings}>
            {scraps.map((scrap) => {
              return (
                <Card
                  onClick={() => navigate(`/detail/${scrap.region_id}`)}
                  key={scrap.scrap_id}
                >
                  <img src={scrap.region.photo} alt="" />
                </Card>
              );
            })}
          </StyledSlider>
        ) : (
          <div className="list">
            {scraps.map((scrap) => {
              return (
                <Card
                  onClick={() => navigate(`/detail/${scrap.region_id}`)}
                  key={scrap.scrap_id}
                >
                  <img src={scrap.region.photo} alt="" />
                </Card>
              );
            })}
          </div>
        )}
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
  .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    //카드 사이 간격

    width: 100%;
    height: 100px;

    :hover div {
      transform: scale(1.03);
    }
    div {
      //자식인 Card 컴포넌트
      width: 93px;
      height: 93px;
      border-radius: 20px;
      background: lightgray 50% / cover no-repeat;
      margin-right: 14px;
    }
  }
`;

const Card = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
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
    color: rgba(255, 255, 255, 0.6);
    opacity: 5;
  }
  .slick-next:before {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.6);
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
      cursor: pointer;
      width: 93px;
      height: 93px;
      border-radius: 20px;
      background: lightgray 50% / cover no-repeat;
    }
  }
`;
