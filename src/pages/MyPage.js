import React, { useEffect } from "react";
import backBtn from "../assets/mypage/backBtn.png";
import { styled } from "styled-components";
import MyInfo from "../components/MyPage/MyInfo";
import ScrapCarousel from "../components/MyPage/ScrapCarousel";
import Item from "../components/MyPage/Item";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "../api/members";
const MyPage = () => {
  const isLogin = true;
  const navigate = useNavigate();

  const getMyInfoData = async () => {
    const res = await getMyInfo();
  };
  useEffect(() => {
    const data = getMyInfoData();
  }, []);
  return (
    <>
      <Back
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={backBtn} alt="" />
      </Back>
      <Wrapper>
        <MyInfo isLogin={false} nickname={"nickname"} />

        <div className="storage">
          <div className="subject">Scrap</div>
          {isLogin ? (
            <div className="list">
              <ScrapCarousel />
            </div>
          ) : (
            <div className="null" />
          )}

          <div className="subject">Travel Itinerary </div>
          {isLogin ? (
            <div className="list">
              <Item subject={0} period={"07.21 ~ 08.19"} place={"Seoul"} />
              <Item subject={0} period={"07.21 ~ 08.19"} place={"Seoul"} />
              <Item subject={0} period={"07.21 ~ 08.19"} place={"Seoul"} />
            </div>
          ) : (
            <div className="null" />
          )}
          <div className="subject">Recommended Destination</div>
          {isLogin ? (
            <div className="list">
              <Item
                subject={1}
                place={"Seoul"}
                tags={["city", "shopping", "family"]}
              />
              <Item
                subject={1}
                place={"Seoul"}
                tags={["city", "shopping", "family"]}
              />
              <Item
                subject={1}
                place={"Seoul"}
                tags={["city", "shopping", "family"]}
              />
            </div>
          ) : (
            <div className="null" />
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default MyPage;
const Back = styled.div`
  margin: 27px 5%;
  @media (min-width: 768px) {
    margin: 27px 10%;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;
const Wrapper = styled.div`
  margin: 0 10%;
  @media (min-width: 768px) {
    margin: 0 20%;
  }

  .subject {
    color: #232323;
    font-size: 1.3rem;
    margin-top: 32px;
    margin-bottom: 20px;
  }
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .null {
    height: 10vh;
  }
`;
