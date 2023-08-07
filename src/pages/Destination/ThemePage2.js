import Button from "../../components/Destination/Button";
import ShortHeader from "../../components/Destination/ShortHeader";
import Title from "../../components/Destination/Title";
import Option from "../../components/Theme/option";
import styled from "styled-components";

const ThemePage2 = () => {
  return (
    <>
      <ShortHeader />
      <Title text="Travel Themes" />
      <Center>
        <OptionContainer>
          <Option text="nature" />
          <Option text="city" />
          <Option text="history" />
          <Option text="shopping" />
          <Option text="foods" />
          <Option text="hanok" />
          <Option text="arts" />
          <Option text="activity" />
        </OptionContainer>
      </Center>
      <Button next="party" />
    </>
  );
};

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const OptionContainer = styled.div`
  width: 25rem;
  display: inline-block;
  height: 60.5vh;
  margin-top: 2rem;
`;

export default ThemePage2;
