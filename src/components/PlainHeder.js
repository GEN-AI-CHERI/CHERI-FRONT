import React from "react";
import logo from "../assets/common/logo.png";
import { styled } from "styled-components";

const PlainHeader = () => {
  return (
    <Wrapper>
      <div className="logo">
        <img src={logo} alt="" width={"38px"} height={"32px"} />
      </div>
    </Wrapper>
  );
};

export default PlainHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 65px;
  padding-left: 20.5px;
  display: flex;
  align-items: center;
`;
