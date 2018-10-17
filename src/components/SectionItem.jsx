import React from 'react';
import styled from 'styled-components';


const SectionItemContainer = styled.div`
    
`;

const AppItem = styled.div``
const ExpItem = styled.div``
const SkillItem = styled.div``
const EdItem = styled.div``
const GenItem = styled.div``
const WoopsItem = styled.div``

const determineSectionItem = (type) => {

    if (type === 'apps') {
        return (<AppItem> app </AppItem>)
    } else if (type === 'experience') {
        return (<ExpItem> exp </ExpItem>)
    } else if (type === 'skills') {
        return (<SkillItem> skill </SkillItem>)
    } else if (type === 'education') {
        return (<EdItem> ed </EdItem>)
    } else if (type === 'general') {
        return (<GenItem> gen </GenItem>)
    } else {
        return (<WoopsItem> woops </WoopsItem>)
    }
    
}

const SectionItem = (props) => {
    return (
        <SectionItemContainer>
            {determineSectionItem(props.name)}
        </SectionItemContainer>
    )
}

module.exports = SectionItem