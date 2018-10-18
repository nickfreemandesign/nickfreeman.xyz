import React from 'react';
import styled from 'styled-components';

const ReplyBarContainer = styled.div`
    padding-top: 30px;
    grid-area: replybar;
    display: flex;
    align-items: center;
    > div:not(:first-child){
        padding-left: 30px;
    }
`;
const Prohibited = styled.div`
    display: flex;
    > input {
        &:hover{
            cursor: pointer;
        }
    }
    > div {
        font-size: 14px;
        padding-left: 5px;
        color: blue;
        text-decoration: underline;
        &:hover{
            cursor: pointer;
        }
    }
`

const ReplyButton = styled.div`
    transition: all .15s ease-in-out;
    background-color: #ece3ef;
    border: solid #b481c9 1px;
    border-radius: .2em;
    color: #7b1fa2;
    font-size: 1.2em;
    height: 2rem;
    line-height: 1.2em;
    padding: 0 .8em;
    white-space: nowrap;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #dfd0e5;
        border-color: #9353af;
        color: #520773;
        cursor: pointer;
    }
`;

const PostedWhen = styled.div`
    font-size: 14px;
`;

const ReplyBar = (props) => {
    return (
        <ReplyBarContainer>
            <ReplyButton>reply ✉</ReplyButton>
            <Prohibited>
                <input type="checkbox"/>
                <div title="check this only for self gratification">productive</div>
            </Prohibited>
            <PostedWhen>
                posted before today
            </PostedWhen>
        </ReplyBarContainer>
    )
}

module.exports = ReplyBar