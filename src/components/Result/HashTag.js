import styled from "styled-components";

const HashTag = ({ text }) => {
  return <ThemeOption width={text ? text.length : 10}># {text}</ThemeOption>;
};

const ThemeOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => Math.min(props.width * 0.8, 5)}rem;
  height: 1.3rem;
  padding: 2px 10px 8px 10px;
  border-radius: 36px;
  display: inline-block;
  text-align: center;
  background-color: "white";
  box-shadow: 5px 4px 15px -3px rgba(0, 0, 0, 0.25);
  border: none;
  font-size: 0.9rem;
  color: #353535;
  font-weight: 400;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
`;

export default HashTag;
