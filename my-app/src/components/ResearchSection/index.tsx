import React from 'react';
import {
  ResearchContainer,
  MainTitle,
  Section,
  SectionTitle,
  Row,
  TextColumn,
  ImageWrap,
  Img,
  Paragraph,
  ExternalLink,
} from './ResearchElements';

const ResearchSection = () => {
  return (
    <ResearchContainer id="research">
      <MainTitle>Research Interests</MainTitle>

      {/* Long-lived Particles */}
      <Section>
        <SectionTitle>Long-lived Particles</SectionTitle>
        <Row reverse={false}>
          <ImageWrap>
            <Img src={require('../../images/llp.png')} alt="LLP visualization" />
          </ImageWrap>
          <TextColumn>
          <Paragraph>
            Long-lived particles (LLPs) are a possible sign of new physics and could decay
            far from where they are created, leaving unusual signals in the detector that
            standard searches might miss.
          </Paragraph>
          <Paragraph>
            My research focuses on identifying long-lived particles in the ATLAS Inner
            Detector. I coordinate a wide-ranging search program targeting displaced decays
            from the Higgs boson, long-lived heavy neutral leptons, and exotic particles connected
            to dark matter.
          </Paragraph>
            <Paragraph>
              🔗{' '}
              <ExternalLink
                href="https://atlas.cern/Updates/Briefing/Higgs-to-LongLived-Particles"
                target="_blank"
                rel="noopener noreferrer"
              >
                Physics Briefing
              </ExternalLink>
            </Paragraph>
          </TextColumn>
        </Row>
      </Section>

      {/* Dark QCD */}
      <Section>
        <SectionTitle>Dark QCD & Emerging Jets</SectionTitle>
        <Row reverse={true}>
          <ImageWrap>
            <Img src={require('../../images/emerging_jets.png')} alt="Emerging jet schematic" />
          </ImageWrap>
          <TextColumn>
            <Paragraph>
              Dark sector models with confining gauge groups, such as dark QCD, can produce jet-like sprays of
              long-lived particles. These “emerging jets” feature tracks that materialize at large radii.
            </Paragraph>
            <Paragraph>
              I developed the first emerging jet tagger in ATLAS using a transformer architecture, which powered the
              first Run 3 search for this signature.
            </Paragraph>
            <Paragraph>
              🔗{' '}
              <ExternalLink
                href="https://atlas.cern/Updates/Briefing/Shedding-Light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Physics Briefing
              </ExternalLink>
            </Paragraph>
          </TextColumn>
        </Row>
      </Section>

      {/* Track Reconstruction */}
      <Section>
        <SectionTitle>Track Reconstruction with ML</SectionTitle>
        <Row reverse={false}>
          <ImageWrap>
            <Img src={require('../../images/gnn_tracking.png')} alt="GNN tracking illustration" />
          </ImageWrap>
          <TextColumn>
            <Paragraph>
              The High-Luminosity LHC presents new challenges for track reconstruction due to dense
              environments and high pile-up. My research develops GNN-based algorithms to reconstruct displaced tracks
              with high efficiency and precision.
            </Paragraph>
            <Paragraph>
              These tools will be crucial to enabling LLP searches and integrating advanced ML models into the ATLAS
              offline and trigger systems.
            </Paragraph>
          </TextColumn>
        </Row>
      </Section>
    </ResearchContainer>
  );
};

export default ResearchSection;
