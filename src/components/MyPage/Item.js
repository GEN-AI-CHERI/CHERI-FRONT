import React from "react";
import { styled } from "styled-components";
import airplane from "../../assets/mypage/airplane.png";
import placeIcon from "../../assets/mypage/placeIcon.png";
const Itinerary = ({ subject, period = "", place = "", tags = [] }) => {
  return subject ? (
    <Wrapper $color={"pink"}>
      <div className="data">
        Seoul
        <div className="tags">
          {tags.map((el) => {
            return <div>#{el}&nbsp;</div>;
          })}
        </div>
      </div>

      <img src={placeIcon} alt="" />
    </Wrapper>
  ) : (
    <Wrapper>
      <div className="data">07.21 ~ 08.19 | Seoul</div>
      <img src={airplane} alt="" />
    </Wrapper>
  );
};

export default Itinerary;
const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 600px;
  }
  height: 3.1rem;
  border-radius: 9px 13px 13px 9px;
  border: ${(props) =>
    props.$color === "pink" ? "1px solid #FFD4D4" : "1px solid #b7e9ff"};
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  .data {
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: start;

    color: #232323;
    text-align: center;

    font-size: 15px;

    font-weight: 400;
  }
  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffa7a7;
    font-size: 12px;
    font-weight: 400;
    padding-top: 2.5px;
    margin-left: 10px;
  }

  img {
    height: 3.1rem;
    width: 3.1rem;
  }
`;
