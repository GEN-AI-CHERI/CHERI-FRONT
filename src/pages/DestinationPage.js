import ShortHeader from "../components/Destination/ShortHeader";
import Title from "../components/Destination/Title";
import Card from "../components/Destination/Card";
import Button from "../components/Destination/Button";
import { styled } from "styled-components";

const DestinationPage = () => {
  return (
    <>
      <ShortHeader />
      <Title text="Select Destination" />
      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <Button next="themes" />
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export default DestinationPage;
