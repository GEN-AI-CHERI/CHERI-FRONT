import search from "../../assets/map/search.png";
import { styled } from "styled-components";

const SearchBar = () => {
  return (
    <Center>
      <Container>
        <SearchIcon src={search} />
        <Input />
      </Container>
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: absolute;
  margin-top: 5rem;
  width: 19rem;
  height: 3.5rem;
  background-color: white;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 31px;
  box-shadow: 5px 4px 15px -3px rgba(0, 0, 0, 0.25);
`;

const Input = styled.input`
  width: 14rem;
  height: 3rem;
  background-color: white;
  border: none;
  outline: none;
`;

const SearchIcon = styled.img`
  width: 2rem;
`;

export default SearchBar;
