import React from 'react';
import styled from 'styled-components';

// import components
import SectionItem from './SectionItem'


const SectionContainer = styled.div`
    padding-bottom: 20px;
`;

const Title = styled.div`
    display: flex;
    margin: auto;
    height: 30px;
    width: 100%;
    font-family: "Arial", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    background-color: rgb(244, 244, 244);
    border-top: 1px solid rgb(204,204,204);
    border-bottom: 1px solid rgb(204,204,204);
    color: blue;
`;

const Section = (props) => {
    return (
        <SectionContainer>
            <Title>{props.name}</Title>
            {props.data.map( (item, idx) => {
                return (
                    <SectionItem 
                        name={props.name} 
                        data={item}
                        key={`${props.name}-${idx}`}/>)
            })}
        </SectionContainer>
    )
}

module.exports = Section