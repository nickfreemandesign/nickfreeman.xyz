import React from 'react';
import styled from 'styled-components';

const UneventCalContainer = styled.div`
    > div{
        font-weight: bold;
    }
`;

const Cal = styled.table`
    margin: auto;
    border-collapse: collapse;
    width: 75%;
`;

const CalDays = styled.tr`
    background-color: #cccccc;
    color: black;
    font-size: 12px;
    margin: 0;
    padding: 0;
    border: 0;
    > td {
        width: 15px;
    }
`;

const CalNums = styled.tr`
    background-color: white;
    > td {
        border: 1px solid rgb(204,204,204);
        height: 15px;
        max-width: 15px;
    }
`;

const UneventCal = (props) => {
    return (
        <UneventCalContainer>
            <div>unevent calendar</div>
            <Cal>
                <tbody>
                    <CalDays>
                        <td>M</td>
                        <td>T</td>
                        <td>W</td>
                        <td>T</td>
                        <td>F</td>
                        <td>S</td>
                        <td>S</td>
                    </CalDays>
                    <CalNums>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </CalNums>
                    <CalNums>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </CalNums>
                    <CalNums>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </CalNums>
                    <CalNums>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </CalNums>
                </tbody>
            </Cal>

        </UneventCalContainer>
    )
}

module.exports = UneventCal