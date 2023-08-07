import React from "react";
import PlainHeader from "../../components/PlainHeder";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postSignUp } from "../../api/members";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState(false);
  const { email, password, confirmPassword } = inputs;

  const showErrMsg = () => {
    setIsError(true);
  };
  const handleSignUp = async () => {
    if (
      confirmPassword &&
      password &&
      email &&
      confirmPassword === password &&
      email.includes("@")
    ) {
      try {
        const res = await postSignUp(email, confirmPassword);
        setInputs({ email: "", password: "", confirmPassword: "" });
        navigate("/login");
      } catch (err) {
        showErrMsg();
      }
    }
  };
  const handleChange = (e) => {
    setIsError(false);
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <Wrapper>
      <div className="header">
        <PlainHeader />
        <div className="title">Sign Up</div>
        <div className="subtitle">Hello stranger!</div>
      </div>
      <Form>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
          autoComplete="off"
        />{" "}
        <div className="line" />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          value={password}
          autoComplete="off"
        />{" "}
        <div className="line" />
        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          autoComplete="off"
        />{" "}
      </Form>
      {email && !email.includes("@") && (
        <div className="invalidMsg">*not a valid email address</div>
      )}
      {confirmPassword && confirmPassword !== password && (
        <div className="invalidMsg">
          *The password confirmation does not match
        </div>
      )}
      {isError && <div className="invalidMsg">*The account alreay exists</div>}
      <div className="bottom">
        <Btn onClick={handleSignUp}>Sign Up</Btn>
        <div
          className="toLogin"
          onClick={() => {
            navigate("/login");
          }}
        >
          Already have an account?
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUpPage;

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
  .invalidMsg {
    width: 80%;
    @media (min-width: 768px) {
      max-width: 40%;
    }
    padding-left: 20px;
    margin-top: 12px;
    color: #d90000;
    font-family: Inter;
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

const Form = styled.form`
  height: 168px;
  margin-top: 15vh;
  padding: 0.8rem;
  border-radius: 9px;
  border: 1px solid #fff;
  box-shadow: 0px 3px 14px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  @media (min-width: 768px) {
    max-width: 40%;
  }
  height: 12rem;
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
  .bottom {
    position: absolute;
    bottom: 8vh;
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
