import styled from "styled-components";
import HashTag from "./HashTag";

const Content = () => {
  return (
    <Container>
      <Row>
        <Title>Seoul</Title>
        <Period>2023.07.21 ~ 2023.08.19</Period>
      </Row>
      <HashTag text="city" />
      <HashTag text="shopping" />
      <HashTag text="activity" />
      <HashTag text="friend" />
      <P>
        Here's a suggested travel itinerary to enjoy the natural scenery in a
        small city in Korea. <br />
        The following 1-night 2-day itinerary is centered around Gyeongju, one
        of the small cities known for its historical landmarks and beautiful
        natural landscapes. Morning: Upon arriving at Incheon International
        Airport, take a high-speed bus or KTX to Gyeongju. Once you arrive in
        Gyeongju, start your journey by visiting Seokguram Grotto, a
        representative national treasure and the 24th official site of Korea.
        <br />
        The following 1-night 2-day itinerary is centered around Gyeongju, one
        of the small cities known for its historical landmarks and beautiful
        natural landscapes.
      </P>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Title = styled.h2``;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Period = styled.p`
  color: #232323;
`;

const P = styled.p`
  color: #232323;
  font-size: 0.9rem;
`;

export default Content;
