import styled from "styled-components";

const Avtivity = ({ item }) => {
  return (
    <ActivityContainer>
      <Title>{item.title}</Title>
      <Img src={item.image} />
    </ActivityContainer>
  );
};

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  max-width: 25rem;
  border-radius: 15px;
`;

const Title = styled.h3`
  margin-top: 1rem;
  align-self: flex-start;
  margin-left: 2rem;
`;

export default Avtivity;
