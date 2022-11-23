import React from 'react'
//import { Button } from '../ButtonElement';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    InfoH1,
    ImgWrap,
    Img
} from './InfoElements'

type Props = {
    lightBg: boolean;
    lightText: boolean;
    darkText: boolean;
    id: string;
    heading: string;
    description: string;
    imgStart: any;
    img: any;
    alt: any
}
  

const InfoSection = (props: Props) => {
  return (
    <>
      <InfoContainer lightBg={props.lightBg} id={props.id} >
        <InfoH1>{props.heading}</InfoH1>
        <InfoWrapper>
          <InfoRow imgStart={props.imgStart}>
            <Column1>
              <TextWrapper>
                <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={props.img}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection