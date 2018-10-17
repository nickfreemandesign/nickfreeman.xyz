import React from 'react';
import styled from 'styled-components';


const SectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gainsboro;
`;

const Section = (props) => {
    return (
        <SectionContainer>
            {props.name}
        </SectionContainer>
    )
}

module.exports = Section