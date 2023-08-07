import ShortHeader from "../../components/Destination/ShortHeader";
import Title from "../../components/Destination/Title";
import Button from "../../components/Destination/Button";
import Calendar from "../../components/Period/Calendar";
import Age from "../../components/Period/Age";

const PeriodPage2 = () => {
  return (
    <>
      <ShortHeader />
      <Title text="Period & Age" />
      <Calendar />
      <Age />
      <Button next="result" />
    </>
  );
};

export default PeriodPage2;
