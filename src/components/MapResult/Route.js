import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Route = () => {
const [selected,setSelected] = useState(false);
const navigate = useNavigate();

  return <Container onClick={() => setSelected(!selected)} selected={selected}>
    <Time>2hr 45min</Time>
<P>Gwangju Example Hotel</P>
<Transportation>Bus 1234 | 52min</Transportation>
<P>Example Bus Terminal</P>
<Transportation>Train 567 | 1hr 23min</Transportation>
<P>Jeonju Hanok Village</P>
<Details onClick={() => navigate('/detail-result')}>Details</Details>
  </Container>;
};

const Container = styled.div`
width: 18rem;
height: 14rem;
border-radius: 20px;
margin-left: 1.5rem;
border: ${props => props.selected ? "1px solid #E84848" : "none"};
background: #FFF;
box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
padding-left: 1.2rem;
padding-right: 1.2rem;
padding-bottom: 1.2rem;
`

const P = styled.p`
margin-bottom: 0;
margin-top: 0.8rem;
`

const Transportation = styled.p`
color: #E84848;
margin-top: 0;
font-size: 0.8rem;
`

const Time = styled.h2`
margin-bottom: 0.4rem;
margin-top: 0.5rem;
`

const Details = styled.p`
margin: 0;
font-size: 0.8rem;
margin-left: 13.5rem;
cursor: pointer;
`

export default Route;
