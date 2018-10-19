import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Router, Link } from "@reach/router"

// import components
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import MainHomeView from './MainHomeView'

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
`;

const Home = (props) => { 
  console.log(props.setApp);
  
    return (
      <HomeContainer>
        <Leftbar/>
        <HomeContent>
          <MainHomeView
            setApp={props.setApp}
            data={props.data}/>
        </HomeContent> 
        <Rightbar/>
      </HomeContainer>
    )
}

module.exports = Home

