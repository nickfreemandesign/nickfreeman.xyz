import React from 'react';
import styled from 'styled-components';

// import components
import Section from './Section'

// import data 
import data from '../data'

const MHVContainer = styled.div`
    height: 100%;
    grid-gap: 20px;
    padding: 0 20px;
    width: 100%;
    display: grid;
    grid-template-rows: 40px 1fr;
`;

const Title = styled.div`
    display: flex;
    margin: auto;
    height: 100%;
    width: 100%;
    font-family: "Times New Roman", Times, serif;
    font-size: 1.5rem;
    align-items: center;
    background-color: rgb(244, 244, 244);
    border-top: 1px solid rgb(204,204,204);
    border-bottom: 1px solid rgb(204,204,204);
    justify-content: space-around;
    > div:not(:first-child) {
        font-size: 12px;
        background-color: white;
        color: blue;
        width: 30px;
        text-align: center;
        padding: 2px;
        font-family: "Arial", sans-serif;
    }
`;

const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
`;

const LeftCol = styled.div`
    
`;
const RightCol = styled.div`
    
`;

const MainHomeView = (props) => {
    return (
        <MHVContainer>
            <Title>
                <div>nick freeman</div>
                <div>js</div>
                <div>node</div>
                <div>aws</div>
                <div>node</div>
                <div>cc</div>
            </Title>
            <SectionContainer>
                <LeftCol>
                    <Section name={'apps'} data={data.app}/>
                    <Section name={'skills'} data={data.skill}/>
                </LeftCol>
                <RightCol>
                    <Section name={'experience'} data={data.exp}/>
                    <Section name={'education'} data={data.ed}/>    
                    <Section name={'general'} data={data.gen}/>
                </RightCol>
            </SectionContainer>
        </MHVContainer>
    )
}

module.exports = MainHomeView