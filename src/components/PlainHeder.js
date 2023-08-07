import React from "react";
import logo from "../assets/common/logo.png";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const PlainHeader = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="" width={"38px"} height={"32px"} />
      </div>
    </Wrapper>
  );
};

export default PlainHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;

  .logo {
    margin-left: 1.5em;
  }
`;
