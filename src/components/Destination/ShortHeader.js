import logo from "../../assets/common/logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ShortHeader = () => {
  const navigate = useNavigate();

  return <Logo src={logo} onClick={() => navigate("/")} />;
};

const Logo = styled.img`
  width: 38px;
  height: 32px;
  margin-left: 1.5em;
  margin-top: 1.2rem;
  cursor: pointer;
`;

export default ShortHeader;
