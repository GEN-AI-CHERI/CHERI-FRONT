import ShortHeader from "../../components/Destination/ShortHeader";
import SubTitle from "../../components/Party/SubTitle";
import GainOptions from "../../components/Party/GainOption";
import Button from "../../components/Party/Button";
import { useState } from "react";
import { styled } from "styled-components";

const PartyPage = () => {
  const [party, setParty] = useState("");

  const party_list1 = ["Alone", "Family"];
  const party_list2 = ["Friend", "Partner"];
  const party_list3 = ["Parent", "etc"];

  return (
    <>
      <ShortHeader />
      <SubTitle text="Who are you going on the trip with?" />
      <PartyContainer>
        <Row>
          {party_list1.map((item, idx) => (
            <GainOptions
              key={idx}
              setParty={setParty}
              selectedParty={party}
              item={item}
            />
          ))}
        </Row>
        <Row>
          {party_list2.map((item, idx) => (
            <GainOptions
              key={idx}
              setParty={setParty}
              selectedParty={party}
              item={item}
            />
          ))}
        </Row>
        <Row>
          {party_list3.map((item, idx) => (
            <GainOptions
              key={idx}
              setParty={setParty}
              selectedParty={party}
              item={item}
            />
          ))}
        </Row>
      </PartyContainer>
      <Button party={party} />
    </>
  );
};

const PartyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 17.2rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.2rem;
`;

export default PartyPage;
