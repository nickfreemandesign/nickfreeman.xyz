import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Router, Link } from "@reach/router"

// import components
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 7fr 24fr 4fr;
  font-family: "Arial", sans-serif;
  margin: auto;
  padding: 15px;
`;

const HomeContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gainsboro;
`;

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <HomeContainer>
        <Leftbar/>
        <HomeContent>
          wussup home content 
        </HomeContent> 
        <Rightbar/>
      </HomeContainer>
    )
  }
}

