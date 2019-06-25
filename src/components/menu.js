import React, {Component} from 'react';

import {Row,Col} from 'react-bootstrap';
import Styled from 'styled-components';

const Repair = Styled.div`
color: #464646;
font-size: 18px;
font-weight: 300;
line-height: 22px;
`;

const WorkTime = Styled.div`
color: #2a2a2a;
font-size: 12px;
font-weight: 300;
line-height: 24px;

span {
    display: block;
    color: #464646;
    font-size: 21px;
    font-weight: 700;
}
`;

const Calls = Styled.div`
color: #2a2a2a;
font-size: 12px;
font-weight: 300;
line-height: 24px;

span {
    display: block;
    color: #464646;
    font-size: 21px;
    font-weight: 700;
}
`;

const CallButton = Styled.button`
width: 173px;
height: 45px;
background-color: #3fc7db;
color: #ffffff;
font-size: 14px;
font-weight: 400;
border-radius: 30px;
`;

class Adress extends Component{
    render(){
        return(
            <span>{this.props.addr}</span>
        )
    };
};

class Phone extends Component{
    render(){
        return(
            <span>{this.props.number}</span>
        )
    };
};

class Menu extends Component{

    render(){
        return(
            <Row>
                <Col lg={3}>
                    <Repair>
                    Ремонт айфонов в сервисном
                    центре и на выезде
                    </Repair>
                </Col>
                <Col lg={3} lgOffset={1}>
                    <WorkTime>
                        Пн-пт с 10 до 20, сб,вс с 11 до 18
                        <Adress addr="Ленинская, 301 "/>
                    </WorkTime>
                </Col>
                <Col lg={3}>
                    <Calls>
                        Звонки принимаются 24 часа
                        <Phone number="8 (846) 922 55 44 "/>
                    </Calls>
                </Col>
                <Col lg={2}>
                    <CallButton>
                        Заказать звонок!
                    </CallButton>
                </Col>
            </Row>
        )
    }
};

export default Menu;