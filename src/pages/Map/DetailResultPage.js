import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import map from "../../assets/map_result/map.png";
import back from "../../assets/chat/backIcon.png";
import Search from "../../components/MapResult/Search";
import Bar from "../../components/MapResult/Bar";
import DetailRoute from "../../components/DetailResult/DetailRoute";

const DetailResultPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Back src={back} onClick={() => navigate(-1)} />
      <BaseMap src={map} />
      <Search />
      <Bar />
      <DetailRoute />
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

export default DetailResultPage;
