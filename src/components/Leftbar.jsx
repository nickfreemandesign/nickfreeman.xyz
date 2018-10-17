import React from 'react';
import styled from 'styled-components';

// import components
import UneventCal from './UneventCal'

const LeftbarContainer = styled.div`
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
`;

const Title = styled.div`
    font-family: "Times New Roman", Times, serif;
    font-size: 2rem;
`;

const PostTo = styled.div`
    background-color: #ffffcc;
    width: 55%;
    font-size: 14px;
    padding: 2px 0;
    margin-top: 20px!important;
`;

const MyAcct = styled.div`
    font-size: 14px;
`;

const SearchNfd = styled.input`
    height: 30px;
    font-size: 1rem;
    width: 80%;
    margin-top: 20px;
    border-radius: 3px;
    border: 1px solid rgb(204,204,204);
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: darkgrey;
    }
    &::-moz-placeholder { /* Firefox 19+ */
        color: darkgrey;
    }
    &:-ms-input-placeholder { /* IE 10+ */
        color: darkgrey;
    }
    &:-moz-placeholder { /* Firefox 18- */
        color: darkgrey;
    }
`;

const LinkSection = styled.div`
    font-size: 14px;
    padding-top: 20px;
    > div {
        padding: 5px 0;
    }
`;

const Leftbar = (props) => {
    return (
        <LeftbarContainer> 
            <Title>nfd</Title>
            <PostTo>post to nick</PostTo>
            <MyAcct>my account</MyAcct>
            <SearchNfd placeholder={'this does nothing'}/>
            <UneventCal/>
            <LinkSection>
                <div>help, faq, abuse, legal</div>
                <div>avoid scams & fraud</div>
                <div>terms of use <span>new</span></div>
                <div>privacy policy</div>
                <div>system status</div>
            </LinkSection>
            <LinkSection>
                <div>about nickfreeman</div>
                <div>nickfreeman is desiring</div>
                <div>nickfreeman blog</div>
                <div>best-of-nickfreeman</div>
                <div>nickfreeman TV</div>
                <div>nickfreeman "joe"</div>
                <div>nick connects</div>
            </LinkSection>
            
        </LeftbarContainer>
    )
}

module.exports = Leftbar