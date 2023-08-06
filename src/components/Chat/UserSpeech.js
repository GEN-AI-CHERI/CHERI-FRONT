import styled from "styled-components";

const UserSpeech = ({ text }) => {
  return (
    <End>
      <Container>{text}</Container>
    </End>
  );
};

const End = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 1rem;
  margin-top: 1rem;
`;

const Container = styled.div`
  width: 17rem;
  height: 3rem;
  background-color: #ffefef;
  border-radius: 10px;
  color: #232323;
  padding: 1.1rem;
  font-size: 0.85rem;
`;

export default UserSpeech;
