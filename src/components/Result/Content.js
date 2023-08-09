import styled from "styled-components";
import HashTag from "./HashTag";

const Content = ({
  title = "",
  description,
  begin_date = "",
  end_date = "",
  themes = [],
  detail = [],
}) => {
  return (
    <Container>
      <Row>
        <Title>{title}</Title>
        <Period>{begin_date && end_date && `${begin_date}~${end_date}`}</Period>
      </Row>
      {themes.length &&
        themes.map((item, index) => <HashTag key={index} text={item} />)}
      {detail.length && detail.map((item, index) => <P key={index}>{item}</P>)}
    </Container>
  );
};

const Container = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 5rem;
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
