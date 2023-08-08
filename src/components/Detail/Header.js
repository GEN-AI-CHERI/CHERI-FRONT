import React, { useState } from "react";
import { styled } from "styled-components";
import back from "../../assets/result/back.png";
import scrap from "../../assets/detail/scrap.png";
import unscrap from "../../assets/detail/unscrap.png";
import { useNavigate, useParams } from "react-router-dom";
import { postRegion } from "../../api/regions";
const Header = ({ photo, isScrap }) => {
  const navigate = useNavigate();
  const { region_id } = useParams();
  const isLogin = !!localStorage.getItem("cheritoken");
  const scrapRegion = async () => {
    await postRegion(region_id);
  };
  const handleScrap = () => {
    isLogin && scrapRegion(region_id);
    !isLogin && navigate("/login");
  };

  return (
    <Wrapper $background={photo}>
      <div className="btns">
        <img className="back" alt="" src={back} onClick={() => navigate(-1)} />
        {isScrap ? (
          <img className="scrap" alt="" src={scrap} />
        ) : (
          <img className="scrap" alt="" src={unscrap} onClick={handleScrap} />
        )}
      </div>
      <div className="image">
        <img alt="" src={photo} />
      </div>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div`
  background: url(${(props) => props.$background}) lightgray 50% / cover
    no-repeat;

  .btns {
    display: flex;
    position: absolute;
    margin-top: 1.2rem;
    width: 100%;
    justify-content: space-between;
    z-index: 1;
  }
  .image {
    height: 293px; //수정
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(3.5px);
    img {
    }
  }

  .back {
    width: 2.5rem;
    margin-left: 1.5rem;
    cursor: pointer;
  }
  .scrap {
    width: 2.5rem;
    margin-right: 1.5rem;
    cursor: pointer;
    filter: drop-shadow(
        0px 3.4348926544189453px 2.7479140758514404px rgba(0, 0, 0, 0.02)
      )
      drop-shadow(
        0px 8.687101364135742px 6.949680805206299px rgba(0, 0, 0, 0.03)
      )
      drop-shadow(
        0px 17.720870971679688px 14.176697731018066px rgba(0, 0, 0, 0.04)
      )
      drop-shadow(
        0px 36.501644134521484px 29.201316833496094px rgba(0, 0, 0, 0.05)
      )
      drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07));
  }
`;
