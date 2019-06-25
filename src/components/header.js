import React, {Component} from 'react';

import {Row,Col} from 'react-bootstrap';
import Styled from 'styled-components';

import Link from './link';

const List = Styled.ul`
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`
class Header extends Component{

    render(){
        return(
            <Row>
                <Col lg={12}>
                    <nav>
                        <List>
                            <Link link="#" text="Вызов мастера"></Link>
                            <Link link="#" text="Прайс на ремонт"></Link>
                            <Link link="#" text="Наши преимущества"></Link>
                            <Link link="#" text="Схема работы"></Link>
                            <Link link="#" text="Отзывы клиентов"></Link>
                            <Link link="#" text="Примеры работ"></Link>
                            <Link link="#" text="Контакты"></Link>
                        </List>
                    </nav>
                </Col>
            </Row>
        )
    }
}

export default Header;