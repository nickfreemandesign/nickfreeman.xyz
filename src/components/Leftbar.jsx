import React from 'react';
import styled from 'styled-components';

const LeftbarContainer = styled.div`
    width: 300px;
    height: 80vh;
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

const PostTo = styled.div`
    background-color: #ffffcc;
    width: 55%;
    padding: 5px 0;
    margin-top: 20px!important;
`;

const MyAcct = styled.div`
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

const Title = styled.div`
    font-family: "Times New Roman", Times, serif;
    font-size: 3rem;
`;

const Leftbar = (props) => {
    return (
        <LeftbarContainer> 
            <Title>nfd</Title>
            <PostTo>post to nick</PostTo>
            <MyAcct>my account</MyAcct>
            <SearchNfd placeholder={'this does nothing'}/>
        </LeftbarContainer>
    )
}

module.exports = Leftbar