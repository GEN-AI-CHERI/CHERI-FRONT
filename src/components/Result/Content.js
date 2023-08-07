import styled from "styled-components";
import HashTag from "./HashTag";

const Content = ({ title, description }) => {
  return (
    <Container>
      <Row>
        <Title>{title}</Title>
        <Period>2023.07.21 ~ 2023.08.19</Period>
      </Row>
      <HashTag text="city" />
      <HashTag text="shopping" />
      <HashTag text="activity" />
      <P>{description}</P>
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
