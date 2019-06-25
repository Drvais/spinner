import React, {Component} from 'react';

import {Row,Col} from 'react-bootstrap';
import Styled from 'styled-components';


const Repair = Styled.div`
color: #ffffff;
font-weight: 700;
line-height: 50px;
font-size: 40px;

span {
    display: block;
    font-size: 24px;
    line-height: 30px;
}
`;

const LightText = Styled.div`
color: #ffffff;
font-size: 18px;
font-weight: 300;
line-height: 28px;
margin-top: 54px;
`;

const CallBtn = Styled.button`
width: 245px;
height: 64px;
background-color: #ffa14b;
border-radius: 33px;
margin-top: 34px;
color: #ffffff;
font-size: 18px;
font-weight: bold;
line-height: 24px
`;

class Main extends Component{

    render(){
        return(
            <Row>
                <Col lg={5}>
                    <Repair>
                        Качественный ремонт
                        <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <LightText>
                        Оставьте заявку на бесплатную диагностику без очереди,
                        и получите защитное стекло, стоимостью 1000 рублей,
                        с установкой в подарок!
                    </LightText>
                    <CallBtn>
                        Отправить заявку!
                    </CallBtn>
                </Col>
                <Col lg={6} lgOffset={1}>
                
                </Col>
            </Row>
        )
    }
};

export default Main;