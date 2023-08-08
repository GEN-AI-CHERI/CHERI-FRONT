import ShortHeader from "../../components/Destination/ShortHeader";
import styled from "styled-components";
import { GetGuides } from "../../api/guide";
import Card from "../../components/Guides/Card";
import { useEffect, useState } from "react";

const GuideListPage = () => {
  const [list, setList] = useState([]);
  const [regionId, setRegionId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetGuides();
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
            region_id={item.region_id}
            setRegionId={setRegionId}
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

export default GuideListPage;
