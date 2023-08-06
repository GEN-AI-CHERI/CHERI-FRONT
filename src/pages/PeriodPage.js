import ShortHeader from "../components/Destination/ShortHeader";
import Title from "../components/Destination/Title";
import Button from "../components/Period/Button";
import Calendar from "../components/Period/Calendar";
import Age from "../components/Period/Age";
import { useState } from "react";
import { styled } from "styled-components";

const PeriodPage = () => {
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [age, setAge] = useState(0);

  const age_list1 = ["12 - 29", "30 - 39"];
  const age_list2 = ["40 - 49", "50"];

  return (
    <>
      <ShortHeader />
      <Title text="Period & Age" />
      <Calendar setBeginDate={setBeginDate} setEndDate={setEndDate} />
      <AgeContainer>
        <Row>
          {age_list1.map((item, idx) => (
            <Age key={idx} setAge={setAge} item={item} selectedAge={age} />
          ))}
        </Row>
        <Row>
          {age_list2.map((item, idx) => (
            <Age key={idx} setAge={setAge} item={item} selectedAge={age} />
          ))}
        </Row>
      </AgeContainer>
      <Button beginDate={beginDate} endDate={endDate} age={age} />
    </>
  );
};

const AgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.2rem;
`;

export default PeriodPage;
