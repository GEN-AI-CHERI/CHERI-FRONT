import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import baseMap from "../../assets/map/Basemap.png";
import back from "../../assets/chat/backIcon.png";
import SearchBar from "../../components/Map/SearchBar";
import Details from "../../components/Map/Details";

const MapPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Back src={back} onClick={() => navigate(-1)} />
      <SearchBar />
      <BaseMap src={baseMap} />
      <Details />
    </>
  );
};

const BaseMap = styled.img`
  width: 100vw;
`;

const Back = styled.img`
  margin-left: 1.5em;
  margin-top: 1.2rem;
  width: 2.2rem;
  position: absolute;
  cursor: pointer;
`;

export default MapPage;
