import { GetGuideDetail } from "../../api/guide";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import call from "../../assets/Guide/call.png";
import backIcon from "../../assets/chat/backIcon.png";
import { useNavigate } from "react-router-dom";
import Activity from "../../components/Guides/Activity";

const GuideDetailPage = () => {
  const { guide_id } = useParams();
  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetGuideDetail(guide_id);
        setData(res.guide);
        setInfo(res.guide_info);

        console.log("info", res.guide_info);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header>
        <BackIcon src={backIcon} onClick={() => navigate(-1)} />
      </Header>
      {data && (
        <Container>
          <CardContainer>
            <Photo src={data.photo} />
            <Column>
              <Name>{data.name}</Name>
              <HashTag>{data.tag}</HashTag>
              <Row>
                <Call src={call} />
                <Telephone>{data.telephone}</Telephone>
              </Row>
            </Column>
          </CardContainer>
          <Description>{data.introduction}</Description>
          <Title>Main Activities</Title>
          {info.map((item) => (
            <Activity key={item.image_id} item={item} />
          ))}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  margin-bottom: 5rem;
`;

const Title = styled.h2`
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const Header = styled.div`
  width: 100vw;
  height: 5rem;
`;

const BackIcon = styled.img`
  width: 2.5rem;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  cursor: pointer;
`;

const Telephone = styled.p`
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const Call = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  width: 80%;
`;

const Photo = styled.img`
  width: 8rem;
  height: 8rem;
  margin-right: 1.5rem;
  align-self: flex-start;
  border-radius: 20px;
  margin-left: 2rem;
`;

const Name = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 0.1rem;
  margin-top: 0;
`;

const HashTag = styled.p`
  margin: 0;
  color: #818181;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`;

const Description = styled.p`
  margin: 0;
  white-space: pre-wrap;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 0.5rem;
`;

export default GuideDetailPage;
