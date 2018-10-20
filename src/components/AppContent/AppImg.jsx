import React from 'react';
import styled from 'styled-components';


const AppImgContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    background-color: rgba(0,0,0,.8);
`

const AppImgContent = styled.div`

    > img {
        max-height: 80vh;
        width: auto;
    }
`;

const CloseButton = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    left: 100%;
    height: 26px;
    width: 26px;
    background-color: black;
    color: white;
    border: 2px solid white;
    &:hover{
        cursor: pointer;
    }
`;

const AppImg = (props) => {
    return (
        <AppImgContainer>
            <AppImgContent>
                <CloseButton onClick={props.closeImg}>x</CloseButton>
                <img src={props.imgLink}/>
            </AppImgContent>
        </AppImgContainer>
    )
}

module.exports = AppImg