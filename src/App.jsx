import React from 'react';
import axios from 'axios';
import path from 'path';
import styled from 'styled-components';
import { Router, Link } from "@reach/router"

// import components
import Home from './components/Home'
import Applications from './components/Applications'

const DEBUG = true;

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
    this.readFromFile = this.readFromFile.bind(this)
    this.readFromS3 = this.readFromS3.bind(this)
    this.toggleExpVisibility = this.toggleExpVisibility.bind(this)
  }

  readFromFile(){
    const localJsonPath = path.join(__dirname, `../dist/nfd-min.json`)
    fetch(localJsonPath)
      .then(resp => resp.json())
      .then(data => {
        const experience = data.experience.map(expItem => { return { ...expItem, isVisible: false } })
        const output = { ...data, experience }
        this.setState({ data: output })
      });
  }

  readFromS3(){
    axios.get(`https://s3.amazonaws.com/nickfreeman.xyz/nfd-min.json`)
      .then( resp => {
        const { data } = resp
        const experience = data.experience.map( expItem => { return { ...expItem, isVisible: false } })
        const output = { ...data, experience }
        this.setState({data: output})
      })
  }

  toggleExpVisibility(companyAndTitle) {
    const { data } = this.state
    const experience = data.experience.map(expItem => { 
      const { isVisible, company, title } = expItem
      if (company + title === companyAndTitle) {
        return { ...expItem, isVisible: !isVisible } 
      } else {
        return { ...expItem, isVisible: false } 
      }
    })
    const output = { ...data, experience }
    this.setState({ data: output })
  }
  
  componentDidMount() {
    if (DEBUG) {
      this.readFromFile()
    } else {
      this.readFromS3()
    }
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
                setApp={this.setCurrentApp} 
                toggleExpVisibility={this.toggleExpVisibility}/>
              <Applications 
                path='/apps/:appName'
                currApp={this.state.currApp} />
          </Router> ) : 'Loading ...'
        }
      </AppContainer>
    )
  }
}

