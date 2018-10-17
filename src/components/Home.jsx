import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Router, Link } from "@reach/router"

// import components
import LSidebar from './LSidebar'
import RSidebar from './RSidebar'

const HomeContainer = styled.div`
  max-width: 86vw;
  display: flex;
  font-family: "Arial", sans-serif;
  margin: auto;
`;

const HomeContent = styled.div`
  width: 100%
`;

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <HomeContainer>
        <LSidebar/>
        <HomeContent>
          wussup home content 
        </HomeContent> 
        <RSidebar/>
      </HomeContainer>
    )
  }
}

