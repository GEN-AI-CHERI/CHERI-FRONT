import loadingIcon from "../../assets/common/loading.gif";
import infoIcon from "../../assets/common/info.png";
import styled from "styled-components";
import { PostRecommend } from "../../api/recommend";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoadingPage = () => {
  const navigate = useNavigate();

  const NavigateResult = () => {
    navigate("/result");
  };

  const with_who = useSelector((state) => state.destination.with_who);
  const age = useSelector((state) => state.destination.age);
  const theme = useSelector((state) => state.destination.theme);
  const begin_date = useSelector((state) => state.destination.begin_date);
  const end_date = useSelector((state) => state.destination.end_date);

  // Next 버튼 클릭하면 결과 post 요청
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await PostRecommend(
          with_who,
          age,
          theme,
          begin_date,
          end_date
        );

        localStorage.setItem("desRes", JSON.stringify(data));

        NavigateResult();
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
      <InfoContainer>
        <Info src={infoIcon} />
        <H2>Do you know? </H2>
      </InfoContainer>
      <Des>
        You can receive recommendations for tour guides operating in your
        selected travel destinations.
      </Des>
      <P> Generating results..</P>
    </Container>
  );
};

const Des = styled.p`
  text-align: center;
  width: 25rem;
  color: #3f3f3f;
`;

const Info = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.5rem;
  margin-top: 0.3rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  color: #595959;
  margin: 0;
  font-size: 1.3rem;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14rem;
`;

const LoadingIcon = styled.img`
  width: 14rem;
`;

const P = styled.p`
  font-size: 1.3rem;
  color: #121212;
  position: absolute;
  bottom: 5rem;
`;

export default LoadingPage;
