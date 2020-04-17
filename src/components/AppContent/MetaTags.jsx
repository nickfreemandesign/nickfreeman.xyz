import React from 'react';
import styled from 'styled-components';

const MetaTagsContainer = styled.div`
    grid-area: metas;
    padding: 20px;
`;

const TagTitle = styled.div`
    background-color: rgb(244, 244, 244);
    border: 1px solid rgb(204,204,204);
    border-radius: 2px;
    max-width: 100px;
    font-weight: bold;
    text-align: center;
`;

const TagContainer = styled.div`
    display: grid;
    margin: 5px 0px;
    grid-template-columns: repeat(auto-fill, minmax( 100px, 1fr) );
    grid-gap: 2px;
    font-size: 14px;
    text-align: center;
`;

const Tag = styled.div`
    background-color: rgb(244, 244, 244);
    border: 1px solid rgb(204,204,204);
    border-radius: 2px;
`;

const MetaTags = (props) => {
    return (
        <MetaTagsContainer>
            <div>
                <TagTitle>front end</TagTitle>
                <TagContainer>
                {props.tags.frontEnd.map((tag, idx) => {
                    return <Tag key={`fe${idx}`}>{tag}</Tag>
                })}
                </TagContainer>
            </div>
            <div>
                <TagTitle>back end</TagTitle>
                <TagContainer>
                {props.tags.backEnd.map((tag, idx) => {
                    return <Tag key={`be${idx}`}>{tag}</Tag>
                })}
                </TagContainer>
            </div>
            <div>
                <TagTitle>deployment</TagTitle>
                <TagContainer>
                {props.tags.deployment.map((tag, idx) => {
                    return <Tag key={`dep${idx}`}>{tag}</Tag>
                })}
                </TagContainer>
            </div>
        </MetaTagsContainer>
    )
}

module.exports = MetaTags