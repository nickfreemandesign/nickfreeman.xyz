import React from 'react';
import styled from 'styled-components';


const ExpItemContainer = styled.div`
    padding: 3px 0;
    display: flex;
    justify-content: space-between;
`

const LeftSide = styled.div`
    > div:first-child{
        font-style: italic;
    }
    > div:last-child{
        font-weight: bold;
    }
`;

const RightSide = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div{
        font-size: 12px;
    }
`

const ExpItem = (props) => {
    return (
        <ExpItemContainer>
            <LeftSide>
                <div>{props.data.company}</div>
                <div>{props.data.title}</div>
            </LeftSide>
            <RightSide>
                <div>{props.data.location}</div>
                <div>{props.data.duration}</div>
            </RightSide>
        </ExpItemContainer>
    )
}

module.exports = ExpItem