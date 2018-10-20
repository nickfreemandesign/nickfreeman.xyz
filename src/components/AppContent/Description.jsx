import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    grid-area: desc;
    font-family: "Bitstream Vera Serif", "Times New Roman", serif;
`;

const Description = (props) => {

    let description = props.desc.split('|')

    return (
        <DescriptionContainer>
            {description.map( (desc, idx) => {
                return (<p key={`desc${idx}`}>{desc}</p>)
            })}
        </DescriptionContainer>
    )
}

module.exports = Description