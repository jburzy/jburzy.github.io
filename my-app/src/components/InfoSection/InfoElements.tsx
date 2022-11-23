import styled from "styled-components";

interface InfoSectionProps {
    imgStart?: boolean;
    lightBg?: boolean;
    lightText?: boolean;
    darkText?: boolean;
}

export const InfoContainer = styled.div<InfoSectionProps>`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#fff')};
    padding: 24px 0;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const InfoRow = styled.div<InfoSectionProps>`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);    
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ?  `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #fff
    font-size: 16px;
    line-height: 16px;
    font-weight: bold;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1<InfoSectionProps>`
    margin-left: 24px;
    font-size: 48px;
    max-height: 80px;
    line-height: 1.1;
    font-weight: bold;
    text-align: center;
    color: ${({lightText}) => (lightText ? '#fff': '#000000')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ResearchList = styled.ul`
    list-style: square;
    align-items: center;
    text-align: left;
    margin-left: 200px;
    color: '#000000';
`

export const ResearchItem = styled.li`
    height: 80px;
    font-weight: bold;
    color: '#000000';
`

export const Subtitle = styled.p<InfoSectionProps>`
    max-width: 600px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightText}) => (lightText ? '#fff': '#000000')};
    text-align: justify;
    text-justify: inter-word;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const InfoH1 = styled.h1`
    margin-left: 24px;
    font-size: 48px;
    max-height: 80px;
    line-height: 1.1;
    font-weight: bold;
    text-align: center;
    color: #000000;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`