import send from "../../assets/chat/send.png";
import styled from "styled-components";

const Input = () => {
  return (
    <Container>
      <InputField placeholder="Please enter a text..." />
      <Send src={send} />
    </Container>
  );
};

const InputField = styled.input`
  width: 20rem;
  height: 3.3rem;
  border-radius: 28px;
  border: 1px solid #d1d1d1;
  padding-left: 1rem;
  outline: none;
  margin-right: 1rem;
`;

const Send = styled.img`
  width: 2.5rem;
`;

const Container = styled.div`
  width: 390px;
  height: 5.5rem;
  background: #fff;
  box-shadow: 0px -3px 27px 0px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Input;
