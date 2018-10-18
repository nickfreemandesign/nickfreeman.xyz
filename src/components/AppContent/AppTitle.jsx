import React from 'react';
import styled from 'styled-components';

const AppTitleContainer = styled.div`
    grid-area: apptitle;
    padding-top: 20px;
`;

const AppTitle = (props) => {
    return (
        <AppTitleContainer>
            ☆ title
        </AppTitleContainer>
    )
}

module.exports = AppTitle