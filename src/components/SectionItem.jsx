import React from 'react';
import styled from 'styled-components';

// import components
import AppItem from './Items/AppItem'
import ExpItem from './Items/ExpItem'
import SkillItem from './Items/SkillItem'
import EdItem from './Items/EdItem'
import GenItem from './Items/GenItem'


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

const WoopsItem = styled.div``

const determineSectionItem = (props) => {
    if (props.name === 'apps') {
        return (<AppItem data={props.data} setApp={props.setApp}/>)
    } else if (props.name === 'experience') {
        return (<ExpItem data={props.data}/>)
    } else if (props.name === 'skills') {
        return (<SkillItem data={props.data}/>)
    } else if (props.name === 'education') {
        return (<EdItem data={props.data}/>)
    } else if (props.name === 'general') {
        return (<GenItem data={props.data}/>)
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