import React from 'react';
import styled from 'styled-components';


const EdItemContainer = styled.div`
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

const EdItem = (props) => {
    console.log(props);
    
    return (
        <EdItemContainer>
            <LeftSide>
                <div>{props.data.institution}</div>
                <div>{props.data.credential}</div>
            </LeftSide>
            <RightSide>
                <div>{props.data.location}</div>
                <div>{props.data.date}</div>
            </RightSide>
        </EdItemContainer>
    )
}

module.exports = EdItem