import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    grid-area: desc;
`;

const Description = (props) => {
    return (
        <DescriptionContainer>
            description
        </DescriptionContainer>
    )
}

module.exports = Description