import styled from "styled-components";

const Question = ({ question }) => {
  // 클릭시 해당 질문에 대한 답변 생성 요청
  return <Q>{question}</Q>;
};

const Q = styled.p`
  display: block;
  cursor: pointer;
  width: 100%;
  height: 45px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default Question;
