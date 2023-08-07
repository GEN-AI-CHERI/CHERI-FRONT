import styled from "styled-components";

const Question = ({ question, setAutoPost = false }) => {
  // 클릭시 해당 질문에 대한 답변 생성 요청
  return (
    <>
      {setAutoPost ? (
        <Container onClick={() => setAutoPost(question)}>
          <Q>{question}</Q>
        </Container>
      ) : (
        <ContainerDeact>
          <Q>{question}</Q>
        </ContainerDeact>
      )}
    </>
  );
};

const Container = styled.div`
  display: block;
  cursor: pointer;
  background-color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;
const ContainerDeact = styled.div`
  display: block;
  background-color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;
const Q = styled.p`
  text-align: center;
`;

export default Question;
