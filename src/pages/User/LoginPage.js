import React from "react";
import PlainHeader from "../../components/PlainHeder";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postSignIn } from "../../api/members";
import CheriSpeech from "../../components/Chat/CheriSpeech";
const LoginPage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  const { email, password } = inputs;

  const showErrMsg = () => {
    setIsError(true);
  };
  const handleLogin = async () => {
    if (email && password) {
      try {
        const data = await postSignIn(email, password);
        sessionStorage.setItem("cheritoken", data.access_token);
        navigate("/");

        window.location.reload();

        setInputs({ email: "", password: "" });
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
        <div className="title">Login</div>
        <div className="subtitle">Welcome Back</div>
      </div>
      <div className="mid">
        <Form>
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
            autoComplete="off"
          />
          <div className="line" />
          <input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            value={password}
            autoComplete="off"
          />
        </Form>

        {isError && (
          <div className="invalidMsg">*Your email or password is not valid</div>
        )}
      </div>
      <Btn onClick={handleLogin}>Login</Btn>
      <div
        className="toSignup"
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
  .mid {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 121px;
    height: 161px;
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
  .title {
    color: #353535;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    padding-left: 2.2rem;
    display: flex;
    align-items: end;
    margin-top: 20px;
  }
  .subtitle {
    color: #353535;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 192.023%;
    padding-left: 2.2rem;
  }
  .toSignup {
    cursor: pointer;
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

const Form = styled.form`
  border-radius: 9px;
  border: 1px solid #fff;
  box-shadow: 0px 3px 14px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  @media (min-width: 768px) {
    max-width: 40%;
  }
  height: 130px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    width: 90%;
    height: 65px;

    outline: none;
    border: none;

    font-family: Inter;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  input::placeholder {
    color: #b7b7b7;
    font-family: Inter;
    font-size: 1.1rem;
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
  cursor: pointer;
  margin-top: 232px;
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
