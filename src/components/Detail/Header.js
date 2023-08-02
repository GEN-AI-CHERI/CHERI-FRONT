import React, { useState } from "react";
import { styled } from "styled-components";
import back from "../../assets/result/back.png";
import scrap from "../../assets/detail/scrap.png";
import unscrap from "../../assets/detail/unscrap.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
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
      <img className="image" alt="" src={""} />
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
  }
`;
