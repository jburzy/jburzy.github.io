import React from 'react'
//import { Button } from '../ButtonElement';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    Heading,
    Subtitle,
} from './InfoElements'

type Props = {
    lightBg: boolean;
    lightText: boolean;
    darkText: boolean;
    id: string;
    heading: string;
    description: string;
}
  

const InfoSection = (props: Props) => {
  return (
    <>
      <InfoContainer lightBg={props.lightBg} id={props.id} >
        <InfoWrapper>
            <InfoRow>
                <Column1>
                <TextWrapper>
                    <Heading lightText={props.lightText}>{props.heading}</Heading>
                    <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
                </TextWrapper>
                </Column1>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection