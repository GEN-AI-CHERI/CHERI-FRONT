import loadingIcon from "../assets/common/loading.gif";
import styled from "styled-components";
import { PostChatroomsStart } from "../api/chat";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoadingPage = () => {
  const navigate = useNavigate();

  const NavigateChat = () => {
    navigate("/chat");
  };

  const age = useSelector((state) => state.age);
  const theme = useSelector((state) => state.theme);
  const begin_date = useSelector((state) => state.begin_date);
  const end_date = useSelector((state) => state.end_date);
  const region_id = useSelector((state) => state.region_id);

  // Next 버튼 클릭하면 채팅 결과 post 요청
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await PostChatroomsStart(
          age,
          theme,
          begin_date,
          end_date,
          region_id
        );

        // 첫 번째 응답만 로컬스토리지에 저장
        localStorage.setItem("res", JSON.stringify(data));

        NavigateChat();
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <LoadingIcon src={loadingIcon} />
      <P> Generating results..</P>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingIcon = styled.img`
  width: 14rem;
`;

const P = styled.p`
  font-size: 1.5rem;
  color: #121212;
`;

export default LoadingPage;
