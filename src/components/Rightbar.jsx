import React from 'react';
import styled from 'styled-components';

const RightbarContainer = styled.div`
    width: 100%;
    background-color: rgb(244, 244, 244);
    border-left: 1px solid rgb(204,204,204);
    border-right: 1px solid rgb(204,204,204);
    text-align: center;
    > div{
        margin: 10px auto;
        color: blue;
        &:hover{
            text-decoration: underline;
            color: purple;
            cursor: pointer;
        }
    }
`

const Rightbar = (props) => {
    return (
        <RightbarContainer> 
        </RightbarContainer>
    )
}

module.exports = Rightbar