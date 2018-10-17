import React from 'react';
import styled from 'styled-components';


const AppItemContainer = styled.div`
    display: flex;
    > div {
        padding-right: 10px;
    }
`;

const AppItem = (props) => {
    return (
        <AppItemContainer link={props.data.repo.url}>
            <div> {props.data.name} </div>
            <div>{`(${props.data.repo.name})`}</div>
        </AppItemContainer>
    )
}

module.exports = AppItem