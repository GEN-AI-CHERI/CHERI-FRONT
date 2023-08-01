import { styled } from "styled-components";
import circle1 from "../../assets/map_result/circle1.png";
import circle2 from "../../assets/map_result/circle2.png";
import line from "../../assets/map_result/line.png";

const Search = () => {
  return (
    <SearchContainer>
      <Container>
        <MiddleLine />
        <IconContainer>
          <EmptyCircle src={circle1} />
          <Line src={line} />
          <FullCircle src={circle2} />
        </IconContainer>
        <Column>
          <Input />
          <Input />
        </Column>
      </Container>
    </SearchContainer>
  );
};

const MiddleLine = styled.span`
  width: 22rem;
  height: 0.1rem;
  margin-top: 3.7rem;
  background-color: #e1e1e1;
  position: absolute;
  z-index: 2;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1rem;
  margin-left: 1.8rem;
  justify-content: center;
  align-items: center;
`;

const EmptyCircle = styled.img`
  width: 1rem;
  margin-bottom: 0.3rem;
`;

const Line = styled.img`
  height: 2rem;
  width: 0.7rem;
  margin-bottom: 0.3rem;
`;

const FullCircle = styled.img`
  width: 1rem;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 22rem;
  height: 7.5rem;
  border-radius: 31px;
  background: #fff;
  box-shadow: 5px 4px 15px -3px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 5rem;
  display: flex;
`;

const Input = styled.input`
  width: 16rem;
  height: 2rem;
  background-color: white;
  margin-top: 0.9rem;
  margin-bottom: 0.9rem;
  margin-left: 1rem;
  border: none;
  outline: none;
  font-size: 1.2rem;
`;

export default Search;
