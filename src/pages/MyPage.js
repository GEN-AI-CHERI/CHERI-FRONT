import React, { useEffect, useState } from "react";
import backBtn from "../assets/mypage/backBtn.png";
import { styled } from "styled-components";
import MyInfo from "../components/MyPage/MyInfo";
import ScrapCarousel from "../components/MyPage/ScrapCarousel";
import Item from "../components/MyPage/Item";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "../api/members";
const MyPage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const [scraps, setScraps] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  const getMyInfoData = async () => {
    try {
      const res = await getMyInfo();
      setUserInfo(res.member);
      setRooms(res.room_list);
      setScraps([]);
      setDestinations([]);
    } catch (err) {}
  };
  useEffect(() => {
    getMyInfoData();
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
        {userInfo.email ? (
          <MyInfo
            nickname={userInfo.email.substring(0, userInfo.email.indexOf("@"))}
          />
        ) : (
          <MyInfo nickname={null} />
        )}
        <div className="storage">
          <div className="subject">Scrap</div>
          {scraps.length ? (
            <div className="list">
              <ScrapCarousel />
            </div>
          ) : (
            <div className="null">No data</div>
          )}
          <div className="subject">Travel Itinerary </div>
          {rooms.length ? (
            <div className="list">
              {rooms.map(() => (
                <Item subject={0} period={"07.21 ~ 08.19"} place={"Seoul"} />
              ))}
            </div>
          ) : (
            <div className="null">No data</div>
          )}
          <div className="subject">Recommended Destination</div>
          {destinations.length ? (
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
            <div className="null">No data</div>
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
    margin-top: 2vh;
    height: 10vh;
    color: #b7b7b7;
    font-family: Inter;
    font-size: 0.8rem;
    font-weight: 500;
    text-align: center;
  }
`;
