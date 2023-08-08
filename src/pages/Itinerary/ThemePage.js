import Button from "../../components/Theme/Button";
import ShortHeader from "../../components/Destination/ShortHeader";
import Title from "../../components/Destination/Title";
import Option from "../../components/Theme/option";
import styled from "styled-components";
import { useEffect, useState } from "react";

const ThemePage = () => {
  const theme_list = [
    "nature",
    "city",
    "history",
    "shopping",
    "foods",
    "hanok",
    "arts",
    "activity",
  ];
  const [selected_list, setSelectedList] = useState([]); // 선택한 테마 리스트
  const [isContinue, setIsContinue] = useState(false);

  useEffect(() => {
    selected_list.length > 0 ? setIsContinue(true) : setIsContinue(false);
  }, [selected_list]);

  return (
    <>
      <ShortHeader />
      <Title text="Travel Themes" />
      <Center>
        <OptionContainer>
          {theme_list.map((theme, idx) => (
            <Option
              key={idx}
              text={theme}
              idx={idx}
              selected_list={selected_list}
              setSelectedList={setSelectedList}
            />
          ))}
        </OptionContainer>
      </Center>
      <Button selected_list={selected_list} isContinue={isContinue} />
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

export default ThemePage;
