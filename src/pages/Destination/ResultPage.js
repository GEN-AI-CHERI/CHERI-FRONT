import Header from "../../components/Result/Header";
import Content from "../../components/Result/Content";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const storedData = JSON.parse(localStorage.getItem("desRes"));

  const recommend_id = storedData.recommend_id;
  const title = storedData.region.title;
  const description = storedData.region.description;
  const photo = storedData.region.photo;
  const begin_date = storedData.begin_date;
  const end_date = storedData.end_date;
  const themes = storedData.themes;
  const detail = storedData.region.detail;
  const region_id = storedData.region.region_id;

  const navigate = useNavigate();

  return (
    <>
      <Header photo={photo} />
      <Content
        key={recommend_id}
        title={title}
        description={description}
        begin_date={begin_date}
        end_date={end_date}
        themes={themes}
        detail={detail}
      />
      <Container>
        <Btn onClick={() => navigate(`/guide-list/${region_id}`)}>
          Tour Guide Suggestions
        </Btn>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23rem;
  height: 5rem;
  border-radius: 31px;
  background: #ffefef;
  box-shadow: 5px 4px 15px -3px rgba(0, 0, 0, 0.25);
  color: #e84848;
  font-size: 17px;
  font-weight: 400;
  border: none;
`;

export default ResultPage;
