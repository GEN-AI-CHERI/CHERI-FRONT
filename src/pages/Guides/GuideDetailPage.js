import { GetGuideDetail } from "../../api/guide";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import guide from "../../assets/Guide/ex.png";

const GuideDetailPage = () => {
  const { region_id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetGuideDetail(region_id);
        setData(res.guides);
        console.log("데이터", data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CardContainer>
        <Photo src={guide} />
        <Column>
          {/* <Name>{data.name}</Name> */}
          {/* <HashTag>{data.tag}</HashTag> */}
          {/* <Description>
            {data.introduction}ewerwerwerwewerwe rwe rwerwerwerwerwrw
          </Description> */}
        </Column>
      </CardContainer>
    </>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40rem;
`;

const Photo = styled.img`
  width: 7rem;
  height: 7rem;
  margin-right: 1.5rem;
  align-self: flex-start;
`;

const Name = styled.h3`
  font-size: 1.3rem;
`;

const HashTag = styled.p`
  margin: 0;
  color: #818181;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`;

const Description = styled.p`
  margin: 0;
  width: 50vw;
  white-space: pre-wrap;
`;

export default GuideDetailPage;
