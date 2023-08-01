import { styled } from "styled-components";
import arrow from '../../assets/map_result/arrow.png'
import { useState } from "react";

const Bar = () => {
const [toggle, setToggle] = useState(false);
const [select, setSelect] = useState('');
const option = ["Leave now", "Depart at", "Arrive by"];

    return<Container>
        <Status open={toggle}>
            <C>
            <OptionContainer>
            {toggle ? option.map((el,i) => <P key={i} onClick={() => {setSelect(el); setToggle(!toggle)}}>{el}</P>) : select.length > 0 ? select : option[0]}
        </OptionContainer>
        <Arrow open={toggle} src={arrow} onClick={() => setToggle(!toggle)}/>
            </C>
        </Status>
        </Container>
}

const C = styled.div`
display: flex;
align-items: baseline;
`

const Arrow = styled.img`
width: 0.7rem;
margin-left: 0.4rem;
margin-top: 0.3rem;
cursor: pointer;
transform : ${props => props.open ? "rotate(180deg)" : "rotate(0deg)"};
`

const OptionContainer = styled.div``

const P = styled.p`
margin-bottom: 0.2rem;
margin-top: 0.5rem;
`

const Container = styled.div`
display: flex;
justify-content: center;
`

const Status = styled.div`
width: 7.7rem;
height: ${props => props.open ? "6rem" :"2rem"};
border-radius: 20px;
border: 1px solid #E84848;
background: #FFF;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
margin-right: 17rem;
top: 13.5rem;
font-size: 0.9rem;
padding-bottom: 0.3rem;
`

export default Bar;