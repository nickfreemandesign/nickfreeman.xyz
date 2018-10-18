import React from 'react';
import styled from 'styled-components';

const MetaTagsContainer = styled.div`
    grid-area: metas;
`;

const MetaTags = (props) => {
    return (
        <MetaTagsContainer>
            metatags
        </MetaTagsContainer>
    )
}

module.exports = MetaTags