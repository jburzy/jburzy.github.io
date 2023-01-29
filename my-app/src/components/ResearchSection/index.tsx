import React from 'react'
//import { Button } from '../ButtonElement';

import {
    ResearchContainer,
    ResearchWrapper,
    ResearchList,
    ResearchItem,
    ResearchH1,
    ResearchH2,
    TextWrapper
} from './ResearchElements'

type Props = {
}
  

const ResearchSection = (props: Props) => {
  return (
    <>
      <ResearchContainer id='research' >
        <ResearchH1>Research Expertise</ResearchH1>
        <ResearchWrapper>
          <ResearchH2>Long-lived particle searches</ResearchH2>
          <TextWrapper>
          </TextWrapper>
          <ResearchH2>Track and vertex reconstruction</ResearchH2>
          <TextWrapper>
          </TextWrapper>
          <ResearchH2>Analysis systems</ResearchH2>
          <TextWrapper>
          </TextWrapper>
        </ResearchWrapper>
      </ResearchContainer>
    </>
  )
}

export default ResearchSection 