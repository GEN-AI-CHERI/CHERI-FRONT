import React from "react";
import { styled } from "styled-components";
import airplane from "../../assets/mypage/airplane.png";
import circleNext from "../../assets/mypage/circleNext.png";
const Itinerary = ({ subject, period = "", place = "", tags = [] }) => {
  return subject === "Travel Itinerary" ? (
    <Wrapper>
      <div className="front">
        <img src={airplane} alt="" />
        <div className="place">{place}</div>
        <div className="period">{period}</div>
      </div>
      <div className="btn">
        <img src={circleNext} alt="" />
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <div className="front">
        <img src={airplane} alt="" />

        <div className="place">{place}</div>
        <div className="tags">
          {tags.map((tag) => {
            return <div>#{tag}&nbsp;</div>;
          })}
        </div>
      </div>
      <div className="btn">
        <img src={circleNext} alt="" />
      </div>
    </Wrapper>
  );
};

export default Itinerary;
const Wrapper = styled.div`
  width: 95%;
  height: 47px;

  border-radius: 9px;
  border: 1px solid rgba(96, 96, 96, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 23px;
    height: 24px;
    padding-left: 13px;
  }
  .front {
    width: 80%;
    display: flex;
  }
  .place {
    padding-left: 5px;
    color: #232323;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
  }
  .tags {
    padding-left: 10px;
    color: #232323;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 3px;
  }
  .btn {
    width: 23px;
    height: 23px;
    margin-right: 26px;
    img {
    }
  }

  .period {
    color: #232323;
    font-size: 12px;
    font-weight: 400;
    margin-left: 10px;
    margin-top: 3px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
