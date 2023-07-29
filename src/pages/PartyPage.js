import ShortHeader from "../components/Destination/ShortHeader";
import SubTitle from "../components/Party/SubTitle";
import GainOptions from "../components/Party/GainOption";
import Button from "../components/Destination/Button";

const PartyPage = () => {
  return (
    <>
      <ShortHeader />
      <SubTitle text="Who are you going on the trip with?" />
      <GainOptions />
      <Button next="period2" />
    </>
  );
};

export default PartyPage;
