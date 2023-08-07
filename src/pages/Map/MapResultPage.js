import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import map from "../../assets/map_result/map.png";
import back from "../../assets/chat/backIcon.png";
import Search from "../../components/MapResult/Search";
import Route from "../../components/MapResult/Route";
import Bar from "../../components/MapResult/Bar";

const MapResultPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Back src={back} onClick={() => navigate(-1)} />
      <BaseMap src={map} />
      <Search />
      <Bar />
      <RouteContainer>
        <Route />
        <Route />
        <Route />
      </RouteContainer>
    </>
  );
};

const BaseMap = styled.img`
  width: 100vw;
  position: absolute;
  z-index: -1;
`;

const Back = styled.img`
  margin-left: 1.5em;
  margin-top: 1.2rem;
  width: 2.2rem;
  position: absolute;
  cursor: pointer;
`;

const RouteContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  display: flex;
  width: 100vw;
  overflow: scroll;
  padding-bottom: 0.8rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default MapResultPage;
