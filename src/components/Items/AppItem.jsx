import React from 'react';
import styled from 'styled-components';
import { Router, Link } from "@reach/router"


const AppItemContainer = styled.div`
    padding: 3px 0;
    display: flex;
    &:hover{
        background-color: rgb(244,244,244);
        cursor: pointer;
    }
    a {
        text-decoration: none;
        display: flex;
        color: rgb(0, 0, 238);
    }
    div {
        padding-right: 10px;
        color: blue;
    }
`;

const AppItem = (props) => {
    const { 
        appLink, 
        name,
        repo } = props.data

    return (
        <AppItemContainer onClick={() => props.setApp(props.data)}>
            <Link to={`/apps/${appLink}`}>
                <div> {name} </div>
            </Link>
            {<a href={repo.url} target="_blank">{`(${repo.name})`}</a>}
        </AppItemContainer>
    )
}

module.exports = AppItem