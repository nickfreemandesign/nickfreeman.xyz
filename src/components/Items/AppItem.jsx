import React from 'react';
import styled from 'styled-components';
import { Router, Link } from "@reach/router"


const AppItemContainer = styled.div`
    padding: 3px 0;
    a {
        text-decoration: none;
        display: flex;
    }
    div {
        padding-right: 10px;
        color: blue;
    }
`;

const AppItem = (props) => {
    return (
        <AppItemContainer>
            <Link to={`/apps/${props.data.appLink}`}>
                <div> {props.data.name} </div>
                <div>{`(${props.data.repo.name})`}</div>
            </Link>
        </AppItemContainer>
    )
}

module.exports = AppItem