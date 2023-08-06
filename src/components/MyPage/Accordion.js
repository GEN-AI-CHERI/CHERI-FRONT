import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import opened from "../../assets/mypage/opened.png";
import closed from "../../assets/mypage/closed.png";
import scrap from "../../assets/mypage/scrap.png";
import ScrapCarousel from "./ScrapCarousel";
import Item from "./Item";
const Accordion = ({ subject, list = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Header onClick={toggleOpen}>
        <div className="icon">
          <img src={scrap} alt="" />
        </div>
        <div className="title">{subject}</div>
        <div className="btn">
          {isOpen ? <img src={opened} alt="" /> : <img src={closed} alt="" />}
        </div>
      </Header>

      {isOpen && (
        <div className="contents">
          {subject === "Scrap" && <ScrapCarousel scraps={list} />}
          {subject !== "Scrap" &&
            list.map((item) => {
              return (
                <div className="item">
                  <Item subject={subject} period={""} place={""} tags={[]} />
                </div>
              );
            })}
        </div>
      )}

      <Line />
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 13px;
    margin-bottom: 32px;
  }
`;

const Header = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .icon {
    img {
      width: 22px;
      height: 22px;
    }
  }
  .title {
    color: #232323;
    font-size: 15px;
    font-weight: 700;
  }

  .btn {
    img {
      width: 16px;
    }
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e9e9e9;
`;
