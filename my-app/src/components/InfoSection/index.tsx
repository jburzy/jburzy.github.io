import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  Heading,
  SectionHeader,
  EntryList,
  Entry,
  EntrySub,
  Bold
} from './InfoElements';

const AboutSection = () => {
  return (
    <InfoContainer id="about">
      <InfoWrapper>
        <Heading>About Me</Heading>

        <SectionHeader>Education</SectionHeader>
        <EntryList>
          <Entry>
            <Bold>PhD, University of Massachusetts Amherst</Bold> (2021)
            <EntrySub>Advisor: Benjamin Brau</EntrySub>
            <EntrySub>
              Thesis: <a href="https://link.springer.com/book/10.1007/978-3-031-30466-8" target="_blank" rel="noopener noreferrer">A Search for Exotic Higgs Decays
Or: How I Learned to Stop Worrying and Love Long-Lived Particles</a>
            </EntrySub>
          </Entry>
          <Entry>
            <Bold>BS, Tufts University</Bold> (2016)
          </Entry>
        </EntryList>

        <SectionHeader>Previous Positions</SectionHeader>
        <EntryList>
          <Entry>
            <Bold>Postdoctoral Research Fellow</Bold>, Simon Fraser University (2021–2025)
          </Entry>
        </EntryList>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default AboutSection;
