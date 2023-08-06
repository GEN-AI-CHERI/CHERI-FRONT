import styled from "styled-components";

const Itinerary = ({ day, description, places }) => {
  return (
    <>
      <p>🍒 Day {day}</p>
      <p>{description}</p>
      Place Recommendation : <br />
      {places.map((place) => `${place}, `)}
    </>
  );
};

export default Itinerary;
