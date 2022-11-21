import React from 'react'
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg
} from './HeroElements'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video}/>
        </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection