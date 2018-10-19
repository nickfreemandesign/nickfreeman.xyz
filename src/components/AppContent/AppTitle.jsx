import React from 'react';
import styled from 'styled-components';

const AppTitleContainer = styled.div`
    grid-area: apptitle;
    padding: 20px 0;
    font-weight: bold;
    font-size: 1.4rem;
    font-family: "Bitstream Vera Serif", "Times New Roman", serif;
`;

const AppTitle = (props) => {
    return (
        <AppTitleContainer>
            ☆ {props.title}
        </AppTitleContainer>
    )
}

module.exports = AppTitle