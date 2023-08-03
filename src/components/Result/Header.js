import bg from "../../assets/result/ex.png";
import styled from "styled-components";
import back from "../../assets/result/back.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/main");
  };

  return (
    <>
      <BackIcon src={back} onClick={handleNavigate} />
      <HeaderImg src={bg} />
    </>
  );
};

const BackIcon = styled.img`
  width: 2.5rem;
  position: absolute;
  margin-left: 1.5em;
  margin-top: 1.2rem;
  cursor: pointer;
`;

const HeaderImg = styled.img`
  width: 100vw;
`;

export default Header;