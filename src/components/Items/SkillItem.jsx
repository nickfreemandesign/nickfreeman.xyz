import React from 'react';
import styled from 'styled-components';


const SkillItemContainer = styled.div`
    > div:first-child{
        padding-bottom: 3px;
        font-weight: bold
    }
`;

const Skill = styled.li``

const SkillItem = (props) => {
    return (
        <SkillItemContainer>
            <div>{props.data.name}</div>
            <div>
                {props.data.data.map( (skill, idx) => {
                    return <Skill 
                            key={`skill${idx}`}>
                            {skill}
                        </Skill>
                })}
            </div>
        </SkillItemContainer>
    )
}

module.exports = SkillItem