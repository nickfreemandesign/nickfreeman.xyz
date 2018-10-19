import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { redirectTo, Link } from "@reach/router"

// import components
import ReplyBar from './AppContent/ReplyBar'
import AppTitle from './AppContent/AppTitle'
import Carousel from './AppContent/Carousel'
import ProjectDescription from './AppContent/Description'
import AppMap from './AppContent/AppMap'
import MetaTags from './AppContent/MetaTags'


const ApplicationsContainer = styled.div`
  font-family: "Arial", sans-serif;
  margin: auto;
  padding: 15px;
`;

const Title = styled.div`
    position: absolute;
    margin: -1px;
    width: 110vw;
    top: 0;
    left: 0;
    height: 40px;
    background-color: rgb(244, 244, 244);
    border-top: 1px solid rgb(204,204,204);
    border-bottom: 1px solid rgb(204,204,204);
    display: flex;
    align-items: center;
`;

const TitleContent = styled.div`
    width: 100%;
    padding: 0 30px;
    display: flex;
`;

const RootIcon = styled.div`
    > a {
        background-color: white;
        text-decoration: none;
        border: 1px solid rgb(204,204,204);
        border-radius: 25px;
        padding: 5px;
    }
`

const ApplicationsContent = styled.div`
    margin-top: 30px;
    width: 100%;
    display: grid;
    grid-template-areas: 'replybar  replybar '
                         'apptitle  apptitle '
                         'carousel  map      '
                         'carousel  metas    '
                         'desc      metas    ';
`;

const UrlPath = styled.div`
    padding-left: 15px;
    font-size: 14px;
    > a {
        text-decoration: none;
    }
`;

let parsedUrl;

export default class Applications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        if (!this.props.currApp) {
            return redirectTo("/")
        }
        parsedUrl = this.props.location.pathname.split('/').slice(1).join(" > ").replace(/-/g, ' ')
    }
    
    componentDidMount() {

    }

    render() { 
        console.log(this.props.currApp);
        
        return (
            <ApplicationsContainer>
                <Title>
                    <TitleContent>
                        <RootIcon>
                            <Link to="/">
                                NF
                            </Link>
                        </RootIcon>
                        <UrlPath>
                            <Link to="/">
                                {parsedUrl}
                            </Link>
                        </UrlPath>
                    </TitleContent>
                </Title>
                <ApplicationsContent>
                    <ReplyBar/>
                    <AppTitle title={`${this.props.currApp.name} - ${this.props.currApp.title}`}/>
                    <Carousel assets={this.props.currApp.assets}/>
                    <ProjectDescription desc={this.props.currApp.description} repo={this.props.currApp.repo}/>
                    <AppMap/>
                    <MetaTags tags={this.props.currApp.technologies}/>
                </ApplicationsContent>
            </ApplicationsContainer>
        )
    }
}

