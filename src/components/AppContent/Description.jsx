import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    grid-area: desc;
    font-family: "Bitstream Vera Serif", "Times New Roman", serif;
`;

const Description = (props) => {
    return (
        <DescriptionContainer>
            {props.desc}
        </DescriptionContainer>
    )
}

module.exports = Description