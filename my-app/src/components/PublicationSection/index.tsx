import React from 'react'
import {
  PubContainer,
  PubWrapper,
  PubList,
  PubItem,
  PubH1
} from './PublicationElements'

const PublicationSection = () => {
  return (
    <PubContainer id='projects'>
      <PubH1>Selected Publications</PubH1>
      <PubWrapper>
        <PubList>
          <PubItem>
            ATLAS Collaboration, <i>Search for emerging jets in pp collisions at √s = 13.6 TeV with the ATLAS experiment</i>, <a href="https://arxiv.org/abs/2505.02429" target="_blank" rel="noopener noreferrer">arXiv:2505.02429 [hep-ex]</a>
          </PubItem>
          <PubItem>
            ATLAS Collaboration, <i>Search for light long-lived particles in pp collisions at √s = 13 TeV using displaced vertices in the ATLAS inner detector</i>, Phys. Rev. Lett. 133 (2024) 161803, <a href="https://arxiv.org/abs/2403.15332" target="_blank" rel="noopener noreferrer">arXiv:2403.15332 [hep-ex]</a>
          </PubItem>
          <PubItem>
            ATLAS Collaboration, <i>Performance of the reconstruction of large impact parameter tracks in the inner detector of ATLAS</i>, Eur. Phys. J. C 83 (2023) 1081, <a href="https://arxiv.org/abs/2304.12867" target="_blank" rel="noopener noreferrer">arXiv:2304.12867 [hep-ex]</a>
          </PubItem>
          <PubItem>
            ATLAS Collaboration, <i>Search for exotic decays of the Higgs boson into long-lived particles in pp collisions at √s = 13 TeV using displaced vertices in the ATLAS inner detector</i>, JHEP 11 (2021) 229, <a href="https://arxiv.org/abs/2107.06092" target="_blank" rel="noopener noreferrer">arXiv:2107.06092 [hep-ex]</a>
          </PubItem>
          <PubItem>
            ATLAS Collaboration, <i>Search for long-lived neutral particles produced in pp collisions at √s = 13 TeV decaying into displaced hadronic jets in the ATLAS inner detector and muon spectrometer</i>, Phys. Rev. D 101 (2020) 052013, <a href="https://arxiv.org/abs/1911.12575" target="_blank" rel="noopener noreferrer">arXiv:1911.12575 [hep-ex]</a>
          </PubItem>
        </PubList>
      </PubWrapper>
    </PubContainer>
  )
}

export default PublicationSection
