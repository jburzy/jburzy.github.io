import React, {useState} from 'react'
import { Button } from '../ButtonElement'
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

type Props = {}

const HeroSection = (props: Props) => {
  
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  };

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video}/>
        </HeroBg>
        <HeroContent>
          <HeroH1>Postdoctoral researcher with the ATLAS Experiment</HeroH1>
          <HeroBtnWrapper>
            <Button to="about" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            ><b>Learn more</b> {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection