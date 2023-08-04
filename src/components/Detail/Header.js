import React, { useState } from "react";
import { styled } from "styled-components";
import back from "../../assets/result/back.png";
import scrap from "../../assets/detail/scrap.png";
import unscrap from "../../assets/detail/unscrap.png";
import { useNavigate } from "react-router-dom";
const Header = ({ photo }) => {
  const navigate = useNavigate();
  const [isScrap, setIsScrap] = useState(false);

  const handleScrap = () => {
    setIsScrap(!isScrap);
  };
  return (
    <Wrapper>
      <div className="btns">
        <img className="back" alt="" src={back} onClick={() => navigate(-1)} />
        {isScrap ? (
          <img className="scrap" alt="" src={scrap} onClick={handleScrap} />
        ) : (
          <img className="scrap" alt="" src={unscrap} onClick={handleScrap} />
        )}
      </div>
      <img className="image" alt="" src={photo} />
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div`
  .btns {
    display: flex;
    position: absolute;
    margin-top: 1.2rem;
    width: 100%;
    justify-content: space-between;
  }
  .image {
    width: 100%;
    height: 293px; //수정
    background: lightgray 50% / cover no-repeat;
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
