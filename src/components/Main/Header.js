import React, { useEffect } from "react";
import logo from "../../assets/common/logo.png";
import { styled } from "styled-components";
import { useState } from "react";
import avatar from "../../assets/common/avatar.png";
import upArrow from "../../assets/main/upArrow.png";
import downArrow from "../../assets/main/downArrow.png";

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

  return (
    <div>
      <img src={logo} alt="" width={"38px"} height={"32px"} />
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
      <Profile>
        <img src={avatar} alt="" />
      </Profile>
    </div>
  );
};

export default Header;

const LanDropdown = styled.ul`
  padding: 0;
  margin: 0;
  width: 89px;

  border-radius: 20px;
  border: 1px solid #353535;
  background: rgba(255, 255, 255, 0.6);

  height: ${(props) => (props.$isOpen === "true" ? "87px" : "28px")};
  display: flex;

  justify-content: center;

  color: #353535;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  .close {
    width: 89px;
    display: flex;
    margin-top: 7px;
    margin-left: 40px;
  }
  .open {
    width: 89px;
    display: flex;
    margin-top: 7px;
    display: flex;
    margin-left: 40px;

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
      width: 8px;
      height: 4px;
      margin-top: 6px;
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
