import styled from "styled-components";

export const ResearchContainer = styled.div`
    background: #f9f9f9;
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 24px 0;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`


export const ResearchWrapper = styled.div`
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
`

export const ResearchList = styled.ul`
    list-style: square;
    align-items: left;
    text-align: left;
    justify-content: left;
    margin-bottom: 64px;
    margin-left: 64px;
    color: '#000000';
`

export const ResearchItem = styled.li`
    color: '#000000';
    text-align: left;
    justify-content: left;
    margin: 12px;
`

export const ResearchH1 = styled.h1`
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

export const ResearchH2 = styled.h2`
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

export const TextWrapper = styled.div`
    margin-left: 48px;
    margin-right: 48px;
    max-width: 1100px;
    padding-top: 0;
    padding-bottom: 60px;
`