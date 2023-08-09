import bg from "../../assets/result/ex.png";
import styled from "styled-components";
import back from "../../assets/result/back.png";
import { useNavigate } from "react-router-dom";

const Header = ({ photo, isSaved = false }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    isSaved ? navigate(-1) : navigate("/");
  };

  return (
    <>
      <Wrapper $background={photo}>
        <BackIcon src={back} onClick={handleNavigate} />
        <div className="image">
          <HeaderImg src={photo} />
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  background: url(${(props) => props.$background}) lightgray 50% / cover
    no-repeat;

  .image {
    height: 232px;
    display: flex;
    justify-content: center;
    backdrop-filter: blur(3.5px);
  }
`;
const BackIcon = styled.img`
  z-index: 1;
  width: 2.5rem;
  position: absolute;
  margin-left: 1.5em;
  margin-top: 1.2rem;
  cursor: pointer;
`;

const HeaderImg = styled.img``;

export default Header;
