import styled from "styled-components";
import guide from "../../assets/Guide/ex.png";
import move from "../../assets/Guide/move.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Card = ({ item, region_id, guide_id }) => {
  const navigate = useNavigate();

  return (
    <>
      <CardContainer onClick={() => navigate(`/guide/${guide_id}`)}>
        <Photo src={item.photo} />
        <Column>
          <Name>{item.name}</Name>
          <HashTag>{item.tag}</HashTag>
          <Description>{item.introduction.slice(0, 70)}</Description>
        </Column>
        <DetailIcon src={move} />
      </CardContainer>
      <Line />
    </>
  );
};

const DetailIcon = styled.img`
  width: 2rem;
  align-self: flex-end;
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: #dddddd;
  margin-top: 1.5rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const CardContainer = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
  margin-top: 1.5rem;
  cursor: pointer;
`;

const Photo = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 1.5rem;
  border-radius: 16px;
  align-self: flex-start;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  margin-top: -0.5rem;
`;

const HashTag = styled.p`
  margin: 0;
  color: #818181;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`;

const Description = styled.p`
  margin: 0;
  width: 50vw;
  white-space: pre-wrap;
`;

export default Card;
