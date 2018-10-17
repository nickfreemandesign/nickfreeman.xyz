import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Router, Link } from "@reach/router"

// import components


const ApplicationsContainer = styled.div`
  display: grid;
  grid-template-columns: 7fr 24fr 4fr;
  font-family: "Arial", sans-serif;
  margin: auto;
  padding: 15px;
`;

const Title = styled.div`
    position: absolute;
    margin: -12px;
    width: 110vw;
    left: 0;
    height: 40px;
    background-color: rgb(244, 244, 244);
    border-top: 1px solid rgb(204,204,204);
    border-bottom: 1px solid rgb(204,204,204);
    display: flex;
    align-items: center;
`;

const TitleContent = styled.div`
    border: 1px solid maroon;
    width: 100%;
    padding: 0 50px;
`;


export default class Applications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ApplicationsContainer>
            <Title>
                <TitleContent>
                    wussup
                </TitleContent>
            </Title>
            </ApplicationsContainer>
        )
    }
}

