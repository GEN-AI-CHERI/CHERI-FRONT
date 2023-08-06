import React, { useEffect, useState } from "react";

import { styled } from "styled-components";
import MyInfo from "../components/MyPage/MyInfo";
import ScrapCarousel from "../components/MyPage/ScrapCarousel";
import Item from "../components/MyPage/Item";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "../api/members";
import Accordion from "../components/MyPage/Accordion";
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
      setScraps(res.scrap_list);
      setDestinations([]);
    } catch (err) {}
  };
  useEffect(() => {
    getMyInfoData();
  }, []);
  return (
    <>
      <Wrapper>
        {userInfo.email ? (
          <MyInfo
            nickname={userInfo.email.substring(0, userInfo.email.indexOf("@"))}
          />
        ) : (
          <MyInfo nickname={null} />
        )}
        <div className="storage">
          <Accordion subject={"Scrap"} list={scraps} />
          <Accordion subject={"Travel Itinerary"} list={rooms} />
          <Accordion subject={"Recommended Destination"} list={destinations} />
        </div>
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  .storage {
    margin: 0 10%;
    @media (min-width: 768px) {
      margin: 0 20%;
    }
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
