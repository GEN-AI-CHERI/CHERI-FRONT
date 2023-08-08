import ShortHeader from "../../components/Destination/ShortHeader";
import Title from "../../components/Destination/Title";
import Card from "../../components/Destination/Card";
import Button from "../../components/Destination/Button";
import scrollUp from "../../assets/destination/scrollU.png";
import scrollDown from "../../assets/destination/scrollD.png";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { getRegions } from "../../api/regions";

const DestinationPage = () => {
  const [destination, setDestination] = useState([]);
  const [regionId, setRegionId] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [showScrollDownButton, setShowScrollDownButton] = useState(false);
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);
  const [isContinue, setIsContinue] = useState(false);

  // 스크롤 다운
  const handleScrollDown = () => {
    setScrollAmount(scrollAmount + 844);
    window.scrollBy(0, 844);
  };

  // 스크롤 업
  const handleScrollUp = () => {
    setScrollAmount(scrollAmount - 844);
    window.scrollBy(0, -844);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      if (window.scrollY === 0) {
        setShowScrollDownButton(true);
        setShowScrollUpButton(false);
      } else if (window.scrollY + windowHeight >= documentHeight) {
        setShowScrollDownButton(false);
        setShowScrollUpButton(true);
      } else {
        setShowScrollDownButton(true);
        setShowScrollUpButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 지역 데이터 얻기
  const getDestinationData = async () => {
    try {
      const data = await getRegions();
      setDestination(data.regions);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDestinationData();
  }, []);

  return (
    <>
      <ShortHeader />
      <Title text="Select Destination" />
      <CardContainer>
        {destination &&
          destination.map((region) => {
            return (
              <Card
                key={region.region_id}
                title={region.title}
                description={region.description}
                region_id={region.region_id}
                photo={region.photo}
                setRegionId={setRegionId}
                chosenId={regionId}
                setIsContinue={setIsContinue}
                isContinue={isContinue}
              />
            );
          })}
      </CardContainer>
      <Fixed>
        <ScrollContainer>
          {showScrollUpButton && (
            <ScrollUp onClick={handleScrollUp} src={scrollUp} />
          )}
          {(scrollAmount === 0 || showScrollDownButton) && (
            <ScrollDown onClick={handleScrollDown} src={scrollDown} />
          )}
        </ScrollContainer>
      </Fixed>
      <Button regionId={regionId} isContinue={isContinue} />
    </>
  );
};

const Fixed = styled.div`
  position: fixed;
  bottom: 2.2rem;
  right: 1.5rem;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  opacity: 70%;
`;

const ScrollUp = styled.img`
  width: 3rem;
  margin-bottom: 1rem;
`;

const ScrollDown = styled.img`
  width: 3rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export default DestinationPage;
