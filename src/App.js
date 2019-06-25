import React, {Component} from 'react';

import {Container} from 'react-bootstrap';
import Styled from 'styled-components';

import Header from './components/header';
import Menu from './components/menu';
import Main from './components/main'

import './App.css';

const url = process.env.PUBLIC_URL + '/img/main-bg.png';

const HeaderWrapper = Styled.header`
  width: 100%;
  height: 48px;
  background-color: #242424;
  opacity: 0.8
`;

const MenuWrapper = Styled.div`
  height: 89px;
  padding-top: 20px;
`;

const MainWrapper = Styled.main`
height: 600px;
padding-top: 130px;
background:  url(${url}) no-repeat;
background-size: cover;

`;

class App extends Component  {

  render(){
    return (
      <div className="App">
        <HeaderWrapper>
          <Container>
            <Header/>
          </Container>
        </HeaderWrapper>

        <MenuWrapper>
          <Container>
            <Menu/> 
          </Container>
        </MenuWrapper>

        <MainWrapper>
          <Container>
            <Main/>
          </Container>
        </MainWrapper>
      </div>
    );
  }
}

export default App;
