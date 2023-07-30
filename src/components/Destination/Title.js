import styled from "styled-components";

const Title = ({ text }) => {
  return <H2>{text}</H2>;
};

const H2 = styled.h2`
  text-align: center;
  font-size: 1.8rem;
`;

export default Title;
