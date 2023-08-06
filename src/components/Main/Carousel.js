import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { styled } from "styled-components";
import { useState } from "react";
import { getRegions } from "../../api/regions";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  //요소 네개 이상이어야 정상 작동
  const [regions, setRegions] = useState([]);
  const navigate = useNavigate();

  const getCardData = async () => {
    try {
      const data = await getRegions();
      setRegions(data.regions);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCardData();
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <StyledSlider {...settings}>
          {regions &&
            regions.map((region) => {
              return (
                <Card
                  key={region.region_id}
                  onClick={() => navigate(`/detail/${region.region_id}`)}
                >
                  <div className="wrapper">
                    <img src={region.photo} alt="" />
                    <div className="filter" />
                    <div className="content">{region.content}</div>
                    <div className="title">{region.title}</div>
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
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  accessivility: true,
  variableWidth: true,
  draggable: false,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "5px", //디폴트값
  pauseOnHover: true, // hover시 정지
  //화면 넓이에 따른 반응형 옵션
  responsive: [
    {
      //뷰포트 너비 910 전까지 적용
      breakpoint: 910,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 15px;
  margin-bottom: 50.5px;
`;

const Card = styled.div`
  overflow: hidden;

  .wrapper {
    position: relative;
    overflow: hidden;

    img {
      height: 100%;
      transform: translate(-25%, 0%);
    }
    .title {
      display: flex;
      background: none;
      position: absolute;
      top: 70%;
      left: 20px;
      width: 200px;
      height: 75px;
      color: #fcfcfc;

      font-family: Racing Sans One;
      font-size: 30px;
      font-weight: 400;
    }
    .content {
      display: flex;
      background: none;
      position: absolute;
      top: 60%;
      left: 14px;
      color: #fcfcfc;
      font-family: Inter;
      font-size: 10px;
      font-weight: 300;
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
const StyledSlider = styled(Slider)`
  width: 100%;
  .slick-prev {
    width: 2rem;
    height: 2rem;
    left: 1rem;
    z-index: 1;
  }
  .slick-next {
    width: 2rem;
    height: 2rem;
    right: 1rem;
  }
  .slick-prev:before {
    font-size: 2rem;

    opacity: 1;
    color: rgba(255, 255, 255, 0.6);
  }
  .slick-next:before {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.6);
    opacity: 1;
  }
  .slick-list {
    //화면에 보여지는 부분
    margin: 0;
  }

  .slick-slide {
    //각 카드 스타일링
    display: flex;
    align-items: center;
    justify-content: center;
    //카드 사이 간격
    @media (max-width: 320px) {
      //갤럭시 폴드 용 등 너비 작은 모바일 용 사이즈 수정
      width: 270px;
      height: 370px;
    }

    width: 310px; //얘가 통일 돼야 정렬됨
    height: 424px;
    //자식인 Card 컴포넌트
    div {
      @media (max-width: 320px) {
        //갤럭시 폴드 용 등 너비 작은 모바일 용 사이즈 수정
        width: 240px;
        height: 332px;
      }

      width: 280px; //얘가 통일 돼야 정렬됨
      height: 378px;
      border-radius: 35px;
      background: lightgray 50% / cover no-repeat;
    }

    :hover div {
      transform: scale(1.03);
    }
  }
  .slick-active {
    //포커스 카드 개수 1개 일때는 current가 덮어씀
    //포커스된 카드들 (pc는 3개, 모바일은 1개))

    @media (max-width: 320px) {
      //갤럭시 폴드 용 등 너비 작은 모바일 용 사이즈 수정
      width: 270px;
      height: 370px;
    }
    width: 310px; //얘가 통일 돼야 정렬됨
    height: 424px;

    div {
      @media (max-width: 320px) {
        //갤럭시 폴드 용 등 너비 작은 모바일 용 사이즈 수정
        width: 250px;
        height: 352px;
      }

      width: 280px; //얘가 통일 돼야 정렬됨
      height: 378px;
      border-radius: 35px;
      background: lightgray 50% / cover no-repeat;
    }
  }
  .slick-current {
    //가운데 카드 하나

    @media (max-width: 320px) {
      //갤럭시 폴드 용 등 너비 작은 모바일 용 사이즈 수정
      width: 270px;
      height: 370px;
    }

    width: 310px; //얘가 통일 돼야 정렬됨
    height: 424px;

    div {
      @media (max-width: 320px) {
        //갤럭시 폴드 용 등 너비 작은 모바일 용 사이즈 수정
        width: 260px;
        height: 370px;
      }
      width: 300px; //얘가 통일 돼야 정렬됨
      height: 424px;
      border-radius: 35px;
      background: lightgray 50% / cover no-repeat;
    }
  }
`;
