import React from 'react'
//import { Button } from '../ButtonElement';

import {
    PubContainer,
    PubWrapper,
    PubList,
    PubItem,
    PubH1,
    PubH2
} from './PublicationElements'

type Props = {
}
  

const PublicationSection = (props: Props) => {
  return (
    <>
      <PubContainer id='projects' >
        <PubH1>Talks & Publications</PubH1>
        <PubWrapper>
          <PubH2>Invited talks</PubH2>
          <PubList>
            <PubItem>
              <i> Searches for BSM physics using challenging and long-lived
              signatures with the ATLAS detector</i>, The XXIX International
              Conference on Supersymmetry and Unification of Fundamental
              Interactions (SUSY 2022). Ioaninna, Greece. 
            </PubItem>
            <PubItem>
              <i>Improved Track Reconstruction Performance for Long-lived Particles in ATLAS</i>, Connecting the Dots 2022. Princeton, USA. 
            </PubItem>
            <PubItem>
              <i>Reduced formats for long lived particles in ATLAS</i>, Analysis Ecosystems Workshop. IJCLab, Orsay France.
            </PubItem>
            <PubItem>
              <i>Search for exotic decays of the Higgs boson to long-lived particles using displaced vertices in the ATLAS inner detector</i>, Searching for long-lived particles at the LHC and beyond: Ninth workshop of the LLP community. Online.
            </PubItem>
            <PubItem>
              <i>Searches for New Long-lived Particles with the ATLAS detector</i>, 2021 Phenomenology Symposium. Online.
            </PubItem>
            <PubItem>
              <i>Electrical defects in co-cured bus tapes and quality control strategies</i>, Forum on Tracking Detector Mechanics 2019. Cornell University, Ithaca, New York.
            </PubItem>
          </PubList>
          <PubH2>Selected publications</PubH2>
          <PubList>
            <PubItem>
              Jackson Burzynski, <i>Improved Track Reconstruction Performance for Long-lived Particles in ATLAS</i>, <a href="https://indico.cern.ch/event/1103637/papers/4821867/files/11385-eprint.pdf" target="_blank">PROC-CTD2022-04</a> Proceedings of the CTD 2022
            </PubItem>
            <PubItem>
              ATLAS Collaboration, <i>Search for exotic decays of the Higgs boson into long-lived particles in pp collisions at
              sqrt(s) = 13 TeV using displaced vertices in the ATLAS inner detector</i>, <a href="
https://doi.org/10.1007/JHEP11%282021%29229" target="_blank">JHEP 11 (2021) 229</a> <a href="https://arxiv.org/abs/2107.06092" target="_blank">arXiv:2107.06092 [hep-ex]</a>
            </PubItem>
            <PubItem>
              ATLAS Collaboration, <i>Search for long-lived neutral particles produced in pp collisions at sqrt(s) = 13 
TeV decaying into displaced hadronic jets in the ATLAS inner detector and muon spectrometer</i>, <a href="http://dx.doi.org/10.1103/PhysRevD.101.052013" target="_blank">Phys. Rev. D 101 (2020) 052013</a> <a href="https://arxiv.org/abs/1911.12575" target="_blank">arXiv:1911.12575 [hep-ex]</a>
            </PubItem>
          </PubList>
        </PubWrapper>
      </PubContainer>
    </>
  )
}

export default PublicationSection 