import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';


const ExpItemHeader = styled.div`
    padding: 3px 0;
    display: flex;
    justify-content: space-between;
        &:hover{
        background-color: rgb(244,244,244);
        cursor: pointer;
    }
`
const ExpItemContainer = styled.div``

const ExpDetails = styled.ul`
    background-color: white;
    margin: -5px;
    overflow: hidden;
    &:hover{
        cursor: default;
    }
    &.experience-enter {
        max-height: 0px;
    }
    &.experience-enter-active{
        max-height: 400px;
        transition: max-height 1s ease-out;
    }
    &.experience-exit {
        max-height: 400px;
    }
    &.experience-exit-active{
        max-height: 0px;
        transition: max-height 1s ease-out;
    }
`

const ExpDetail = styled.li`
    margin: 5px 0;
    line-height: 1.5;
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
    const {
        isVisible,
        company,
        title,
        location,
        duration,
        details } = props.data
    
    return (
        <ExpItemContainer>
            <ExpItemHeader onClick={() => props.toggleExpVisibility(company + title)}>
                <LeftSide>
                    <div>{company}</div>
                    <div>{title}</div>
                </LeftSide>
                <RightSide>
                    <div>{location}</div>
                    <div>{duration}</div>
                </RightSide>
            </ExpItemHeader>
            {
                isVisible && (
                    <CSSTransition
                        in={isVisible}
                        timeout={1000}
                        classNames="experience"
                        unmountOnExit>
                    <ExpDetails>
                        { details.map( (detail, idx) => (
                            <ExpDetail key={`detail-${idx}`}>{detail}</ExpDetail>  
                            )) }
                    </ExpDetails>
            </CSSTransition>
                )
            }
        </ExpItemContainer>
    )
}

export default ExpItem