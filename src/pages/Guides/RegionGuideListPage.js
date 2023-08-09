import ShortHeader from "../../components/Destination/ShortHeader";
import styled from "styled-components";
import { GetGuidesByRegion } from "../../api/guide";
import Card from "../../components/Guides/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RegionGuideListPage = () => {
  const [list, setList] = useState([]);
  const { region_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetGuidesByRegion(region_id);
        setList(data.guides);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ShortHeader />
      <Container>
        <Title>Guide List</Title>
        {list.map((item, idx) => (
          <Card
            key={idx}
            item={item}
            guide_id={item.guide_id}
            region_id={item.region_id}
          />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 2.2rem;
`;

export default RegionGuideListPage;
