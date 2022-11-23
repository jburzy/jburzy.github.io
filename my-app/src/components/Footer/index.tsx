import React from 'react'
import { FaGithub, FaGitlab, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems, 
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

type Props = {}

const Footer = (props: Props) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact</FooterLinkTitle>
                    <FooterLink>Email</FooterLink>
                    <FooterLink>LinkedIn</FooterLink>
                    <FooterLink>GitHub</FooterLink>
                    <FooterLink>GitLab</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    Jackson Burzynski
                </SocialLogo>
                <SocialIcons>
                    <SocialIconLink href="mailto: jackson.carl.burzynski@cern.ch" target="_blank"
                    aria-label="EMail">
                      <FaEnvelope />
                    </SocialIconLink>
                    <SocialIconLink href="//www.linkedin.com/in/jackson-burzynski-4220ab108" target="_blank"
                    aria-label="LinkedIn">
                      <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href="//www.github.com/jburzy" target="_blank"
                    aria-label="Github">
                      <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href="https://gitlab.cern.ch/jburzyns" target="_blank"
                    aria-label="Gitlab">
                      <FaGitlab />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer