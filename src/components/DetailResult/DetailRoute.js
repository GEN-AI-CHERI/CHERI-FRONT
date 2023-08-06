import { styled } from "styled-components";
import circle1 from "../../assets/map_result/circle1.png";
import circle2 from "../../assets/map_result/circle2.png";
import circle3 from "../../assets/map_result/circle3.png";
import line from "../../assets/map_result/line.png";

const DetailRoute = () => {
    return<Container>
        <Content>
        <Time>2hr 45min</Time>
<Route1>  <EmptyCircle src={circle1} />11:30 AM |  Gwangju Example Hotel</Route1>
<Transportation>  <Line src={line} />Walk | 5min</Transportation>
<Route1> <EmptyCircle src={circle3} />12:30 AM |  Example Bus Terminal</Route1>
<Transportation><Line src={line} />Bus 1234 | 52min</Transportation>
<Route1> <EmptyCircle src={circle3} />13:30 PM |  Example Bus Stop </Route1>
<Transportation> <Line src={line} />Walk | 7min</Transportation>
<Route1> <EmptyCircle src={circle3} />11:30 AM |  Example Train Station</Route1>
<Transportation> <Line src={line} />Train 567 | 1hr 23min</Transportation>
<Route1>   <FullCircle src={circle2} />14:15 PM |  Jeonju Hanok Village</Route1>
        </Content>
    </Container>
}


const Content = styled.div`
padding-left: 2rem;
`

const EmptyCircle = styled.img`
  width: 1rem;
  margin-right: 0.7rem;
`;

const Line = styled.img`
  height: 2.5rem;
  width: 0.7rem;
  margin-right: 1rem;
`;

const FullCircle = styled.img`
  width: 1rem;
  margin-right: 0.7rem;
`;

const Container = styled.div`
position: absolute;
bottom: 0;
width: 100vw;
height: 40rem;
border-radius: 35px 35px 0px 0px;
background: #FFF;
box-shadow: 0px -8px 11px 0px rgba(0, 0, 0, 0.11);
padding-top: 0.8rem;
`

const Time = styled.h2`
`
const Route1 = styled.div`
font-size: 1.2rem;
display: flex;
align-items: center;
`

const Transportation = styled.p`
color: #E84848;
display: flex;
align-items: center;
margin: 1rem;
margin-left: 0;
`

export default DetailRoute;