import React from 'react';
import styled from 'styled-components';


const GenItemContainer = styled.div`
    > div:first-child{
        padding-bottom: 5px;
        font-weight: bold
    }
    > div:last-child{
        display: grid;
        grid-template-columns: repeat(3, 1fr);   
    }
`;

const Gen = styled.li``

const GenItem = (props) => {
    return (
        <GenItemContainer>
            <div>{props.data.name}</div>
            <div>
                {props.data.data.map((skill, idx) => {
                    return <Gen
                        key={`skill${idx}`}>
                        {skill}
                    </Gen>
                })}
            </div>
        </GenItemContainer>
    )
}

module.exports = GenItem