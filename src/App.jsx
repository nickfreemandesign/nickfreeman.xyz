import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Router, Link } from "@reach/router"

// import components
import Home from './components/Home'
import Applications from './components/Applications'

const AppContainer = styled.div`
  width: 1050px;
  margin: auto;
`;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <AppContainer>
        <Router>
            <Home path='/'/>
            <Applications path='/apps/:appName'/>
        </Router>
      </AppContainer>
    )
  }
}

