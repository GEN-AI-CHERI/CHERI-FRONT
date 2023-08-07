import React from "react";
import { styled } from "styled-components";
import backBtn from "../../assets/mypage/backBtn.png";
import avatar from "../../assets/common/avatar.png";
import { useNavigate } from "react-router-dom";
import next from "../../assets/mypage/next.png";
const MyInfo = ({ nickname }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="header">
        <Back
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={backBtn} alt="" />
        </Back>
      </div>
      <div className="userInfo">
        <div className="text">
          {nickname ? (
            <div className="title">Hello {nickname}!</div>
          ) : (
            <div className="title">Hello Stranger!</div>
          )}
          {nickname ? (
            <div className="subtitle">Discover wonderful Korea!</div>
          ) : (
            <div className="subtitle">Please sign in first</div>
          )}
        </div>
        <div className="profile">
          <img src={avatar} alt="" />
        </div>
      </div>
      {!nickname && (
        <div
          onClick={() => {
            navigate("/login");
          }}
          className="signin"
        >
          Sign In
          <img src={next} alt="" />
        </div>
      )}
    </Wrapper>
  );
};

export default MyInfo;

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
  height: 233px;
  .header {
    width: 100%;
    background: #f2f2f2;
  }
  .userInfo {
    display: flex;
    flex-direction: row;
    width: 82%;
    justify-content: space-between;
    margin-top: 34px;
  }
  .text {
  }
  .title {
    color: #000;
    font-size: 20px;
    font-weight: 700;
  }
  .subtitle {
    color: #232323;
    font-size: 13px;
    font-weight: 400;
  }

  .profile {
    fill: #fff;
    box-shadow: 0px 3.4348926544189453px 2.7479140758514404px 0px
        rgba(0, 0, 0, 0.02),
      0px 8.687101364135742px 6.949680805206299px 0px rgba(0, 0, 0, 0.03),
      0px 17.720870971679688px 14.176697731018066px 0px rgba(0, 0, 0, 0.04),
      0px 36.501644134521484px 29.201316833496094px 0px rgba(0, 0, 0, 0.05),
      0px 100px 80px 0px rgba(0, 0, 0, 0.07);
    border-radius: 50%;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 45px;
      height: 45px;
    }
  }
  .signin {
    cursor: pointer;
    margin-top: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000;
    font-size: 13px;
    font-weight: 700;

    img {
      margin-left: 5px;
      margin-top: 2.5px;
      height: 8px;
      width: 4px;
    }
  }
`;
const Back = styled.div`
  cursor: pointer;
  margin: 0px 5%;
  padding-top: 27px;

  img {
    width: 2rem;
    height: 2rem;
  }
`;
