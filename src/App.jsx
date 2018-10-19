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
    this.state = {
      data: null,
    }
  }

  componentWillMount() {
    axios.get(`https://s3.amazonaws.com/nickfreemandesign/nfd.json`)
         .then( resp => {
           this.setState({data: resp.data})
          })
  }

  render() {
    return (
      <AppContainer>
        <Router>
            <Home 
              path='/'
              data={this.state.data}/>
            <Applications path='/apps/:appName'/>
        </Router>
      </AppContainer>
    )
  }
}

