import styled from "styled-components";

export const PubContainer = styled.div`
    background: #f9f9f9;
    height: 800px;
    justify-content: center;
    align-items: center;
    padding: 24px 0;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`


export const PubWrapper = styled.div`
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
`

export const PubList = styled.ul`
    list-style: square;
    align-items: left;
    text-align: left;
    justify-content: left;
    margin-bottom: 64px;
    margin-left: 64px;
    color: '#000000';
`

export const PubItem = styled.li`
    color: '#000000';
    text-align: left;
    justify-content: left;
    margin: 12px;
`

export const PubH1 = styled.h1`
    margin-left: 24px;
    font-size: 48px;
    max-height: 80px;
    line-height: 1.1;
    font-weight: bold;
    text-align: center;
    color: '#000000';

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const PubH2 = styled.h2`
    margin-left: 48px;
    font-size: 24px;
    max-height: 80px;
    line-height: 1.1;
    text-align: left;
    color: '#000000';

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`

