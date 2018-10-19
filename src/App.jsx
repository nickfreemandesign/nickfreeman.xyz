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
      currApp: null,
    }

    this.setCurrentApp = this.setCurrentApp.bind(this)
  }

  componentWillMount() {
    axios.get(`https://s3.amazonaws.com/nickfreemandesign/nfd-min.json`)
         .then( resp => {
           this.setState({data: resp.data})
          })
  }

  setCurrentApp (appData) {
    this.setState({currApp: appData})
  }

  render() {
    return (
      <AppContainer>
        {
          this.state.data ? 
          ( <Router>
              <Home 
                path='/'
                data={this.state.data}
                setApp={this.setCurrentApp} />
              <Applications 
                path='/apps/:appName'
                currApp={this.state.currApp} />
          </Router> ) : 'Loading ...'
        }
      </AppContainer>
    )
  }
}

