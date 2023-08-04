import React from "react";
import PlainHeader from "../components/PlainHeder";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="header">
        <PlainHeader />
        <div className="title">Login</div>
        <div className="subtitle">Welcome Back</div>
      </div>
      <Form>
        <input placeholder="Email" />
        <div className="line" />
        <input placeholder="Password" type="password" />
      </Form>

      <Btn>Login</Btn>
      <div
        className="toLogin"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Click here to sign up
      </div>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    color: #353535;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    padding-left: 2.2rem;
    display: flex;
    align-items: end;
  }
  .subtitle {
    color: #353535;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 192.023%;
    padding-left: 2.2rem;
  }
  .toLogin {
    margin-top: 23px;
    color: #b7b7b7;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Form = styled.div`
  margin-top: 15vh;
  padding: 0.8rem;
  border-radius: 9px;
  border: 1px solid #fff;
  box-shadow: 0px 3px 14px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  @media (min-width: 768px) {
    max-width: 40%;
  }
  height: 8rem;
  margin-bottom: 4rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    width: 90%;
    height: 20%;

    outline: none;
    border: none;

    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  input::placeholder {
    color: #b7b7b7;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .line {
    width: 100%;
    border-top: 2px solid;
    color: #f0f0f0;
  }
`;
const Btn = styled.div`
  margin-top: 20vh;
  width: 229px;
  height: 58px;
  border-radius: 32px;
  background: #353535;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
`;
