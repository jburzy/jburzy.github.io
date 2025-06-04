import React from 'react';
import profileImage from '../../images/img1.jpg' // ✅ import from src
import {
  HeroContainer,
  HeroWrapper,
  HeroImage,
  HeroText,
  Name,
  Title,
  University,
  About,
  CVButton
} from './HeroElements';
import pdf from '../../documents/CV.pdf'


const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroImage src={profileImage} alt="Profile" />
        <HeroText>
          <Name>Jackson Burzynski</Name>
          <Title>Assistant Professor</Title>
          <University>University of Oklahoma</University>
          <About>
            I am a particle physicist working on the ATLAS Experiment at CERN, specializing in searches for new physics, charged particle track reconstruction, and machine learning.
          </About>
        <CVButton href={pdf} target="_blank" rel="noopener noreferrer">
          View my CV
        </CVButton>
        </HeroText>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
