import ShortHeader from "../components/Destination/ShortHeader";
import Title from "../components/Destination/Title";
import Card from "../components/Destination/Card";
import Button from "../components/Destination/Button";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { getRegions } from "../api/regions";

const DestinationPage = () => {
  const [destination, setDestination] = useState([]);
  const [regionId, setRegionId] = useState(0);

  // 지역 데이터 얻기
  const getDestinationData = async () => {
    try {
      const data = await getRegions();
      setDestination(data.regions);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDestinationData();
  }, []);

  return (
    <>
      <ShortHeader />
      <Title text="Select Destination" />
      <CardContainer>
        {destination &&
          destination.map((region) => {
            return (
              <Card
                key={region.region_id}
                title={region.title}
                description={region.description}
                region_id={region.region_id}
                photo={region.photo}
                setRegionId={setRegionId}
                chosenId={regionId}
              />
            );
          })}
      </CardContainer>
      <Button regionId={regionId} />
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export default DestinationPage;
