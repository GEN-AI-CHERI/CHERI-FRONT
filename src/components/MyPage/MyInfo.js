import React from "react";
import { styled } from "styled-components";
import avatar from "../../assets/common/avatar.png";
import { useNavigate } from "react-router-dom";
const MyInfo = ({ isLogin, nickname }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="text">
        {isLogin ? (
          <div className="title">Hello {nickname}!</div>
        ) : (
          <div className="title">Hello Stranger!</div>
        )}
        {isLogin ? (
          <div
            onClick={() => {
              navigate("./login");
            }}
            className="subtitle"
          >
            Click here to login
          </div>
        ) : (
          <div className="subtitle">Welcome Back!</div>
        )}
      </div>
      <div className="profile">
        <img src={avatar} alt="" />
      </div>
    </Wrapper>
  );
};

export default MyInfo;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .text {
  }
  .title {
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .subtitle {
    color: #232323;
    font-size: 1rem;
    font-weight: 400;
  }

  .profile {
    width: 55px;
    height: 55px;
    fill: #fff;
    box-shadow: 0px 3.4348926544189453px 2.7479140758514404px 0px
        rgba(0, 0, 0, 0.02),
      0px 8.687101364135742px 6.949680805206299px 0px rgba(0, 0, 0, 0.03),
      0px 17.720870971679688px 14.176697731018066px 0px rgba(0, 0, 0, 0.04),
      0px 36.501644134521484px 29.201316833496094px 0px rgba(0, 0, 0, 0.05),
      0px 100px 80px 0px rgba(0, 0, 0, 0.07);
    border-radius: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 42.597px;
      height: 45px;
    }
  }
`;
