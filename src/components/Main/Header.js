import React, { useEffect } from "react";
import logo from "../../assets/common/logo.png";
import { styled } from "styled-components";
import { useState } from "react";
import avatar from "../../assets/common/avatar.png";
import upArrow from "../../assets/main/upArrow.png";
import downArrow from "../../assets/main/downArrow.png";
import { useNavigate } from "react-router-dom";

const Languages = ({ currentLan, setIsOpen, setLanguage, isOpen }) => {
  const languages = ["English", "中文", "日本語"];
  const restLans = languages.filter((lan) => lan !== currentLan);

  return (
    <div>
      <li
        key={currentLan}
        onClick={() => {
          setLanguage(currentLan);
          setIsOpen(!isOpen);
        }}
      >
        {currentLan}
      </li>
      {restLans.map((lan) => {
        return (
          <li
            key={lan}
            onClick={() => {
              setLanguage(lan);
              setIsOpen(!isOpen);
            }}
          >
            {lan}
          </li>
        );
      })}
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [showLogin, setShowLogin] = useState(false);
  const checkLogin = () => {
    if (matchMedia("screen and (min-width: 768px)").matches) {
      setShowLogin(!localStorage.getItem("cheritoken"));
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);

  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="logo">
        <img src={logo} alt="" width={"38px"} height={"32px"} />
      </div>

      <div className="dropdownNprofile">
        <LanDropdown $isOpen={isOpen ? "true" : "false"}>
          <div>
            {isOpen ? (
              <div className="open">
                <Languages
                  className="lan"
                  setLanguage={setLanguage}
                  currentLan={language}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                />
                <div className="arrow" onClick={() => setIsOpen(!isOpen)}>
                  <img src={upArrow} alt="" />
                </div>
              </div>
            ) : (
              <div className="close" onClick={() => setIsOpen(!isOpen)}>
                <div className="lan">{language}</div>
                <div className="arrow">
                  <img src={downArrow} alt="" />
                </div>
              </div>
            )}
          </div>
        </LanDropdown>
        {showLogin && (
          <div className="login" onClick={() => navigate("/login")}>
            Login
          </div>
        )}
        <div className="profile">
          <Profile
            onClick={() => {
              navigate("/mypage");
            }}
          >
            <img src={avatar} alt="" />
          </Profile>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin-left: 1.5em;
  }

  .dropdownNprofile {
    display: flex;
    align-items: center;
    margin-right: 12px;

    .profile {
      cursor: pointer;
      margin-left: 15px;
      @media (min-width: 768px) {
        margin-left: 0;
      }
    }
    .login {
      cursor: pointer;
      margin: 0 23px;
      color: #353535;
      text-align: center;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

const LanDropdown = styled.ul`
  padding: 0;
  margin: 0;
  cursor: pointer;

  z-index: 1;
  border-radius: ${(props) => (props.$isOpen === "true" ? "15px" : "20px")};
  border: 1px solid #353535;
  background: rgba(255, 255, 255, 0.6);
  width: ${(props) => (props.$isOpen === "true" ? "89px" : "100px")};
  height: ${(props) => (props.$isOpen === "true" ? "87px" : "34px")};
  display: flex;

  justify-content: center;
  align-items: center;
  color: #353535;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: ${(props) => (props.$isOpen === "true" ? "55px" : "")};

  .close {
    display: flex;
  }
  .open {
    display: flex;
    margin-top: 7px;
    display: flex;

    li {
      height: 18px;
      list-style-type: none;
      margin-bottom: 8px;
      width: 40px;
      text-align: start;
    }
  }

  .arrow {
    display: flex;
    margin-left: 9px;
    img {
      width: 9px;
      height: 5px;
      margin-top: 5px;
    }
  }
  .lan {
    width: 40px;
    text-align: start;
  }
`;
const Profile = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 39px;
  background: #fff;
  box-shadow: 0px 3.4348926544189453px 2.7479140758514404px 0px
      rgba(0, 0, 0, 0.02),
    0px 8.687101364135742px 6.949680805206299px 0px rgba(0, 0, 0, 0.03),
    0px 17.720870971679688px 14.176697731018066px 0px rgba(0, 0, 0, 0.04),
    0px 36.501644134521484px 29.201316833496094px 0px rgba(0, 0, 0, 0.05),
    0px 100px 80px 0px rgba(0, 0, 0, 0.07);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 31px;
    height: 31px;
    filter: none;
  }
`;
