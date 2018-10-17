import React from 'react';
import styled from 'styled-components';


const SectionItemContainer = styled.div`
    border-bottom: 1px solid rgb(204,204,204);
    color: blue;
    font-size: 14px;
    padding: 2px;
    &:hover{
        background-color: rgb(244,244,244);
        cursor: pointer;
    }
`;

const AppItem = styled.div`
    display: flex;
    > div {
        padding-right: 10px;
    }
`;
const ExpItem = styled.div``
const SkillItem = styled.div``
const EdItem = styled.div``
const GenItem = styled.div``
const WoopsItem = styled.div``

const determineSectionItem = (props) => {
    if (props.name === 'apps') {
        return (
            <AppItem href={props.data.repo.url}>
                <div> {props.data.name} </div>
                <div>{`(${props.data.repo.name})`}</div>    
            </AppItem>)
    } else if (props.name === 'experience') {
        return (<ExpItem> {JSON.stringify(props.data)} </ExpItem>)
    } else if (props.name === 'skills') {
        return (<SkillItem> {JSON.stringify(props.data)} </SkillItem>)
    } else if (props.name === 'education') {
        return (<EdItem> {JSON.stringify(props.data)} </EdItem>)
    } else if (props.name === 'general') {
        return (<GenItem> {JSON.stringify(props.data)} </GenItem>)
    } else {
        return (<WoopsItem> woops </WoopsItem>)
    }
    
}

const SectionItem = (props) => {
    return (
        <SectionItemContainer>
            {determineSectionItem(props)}
        </SectionItemContainer>
    )
}

module.exports = SectionItem