import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Router, Link } from "@reach/router"

// import components
import Home from './components/Home'
import Applications from './components/Applications'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
          <Home path='/'/>
          <Applications path='/apps'/>
      </Router>
    )
  }
}

