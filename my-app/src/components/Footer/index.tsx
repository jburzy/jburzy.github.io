import React from 'react'
import { FaGithub, FaLinkedin, FaTwitch } from 'react-icons/fa'

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
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact</FooterLinkTitle>
                    <FooterLink>Email</FooterLink>
                    <FooterLink>LinkedIn</FooterLink>
                    <FooterLink>GitHub</FooterLink>
                    <FooterLink>GitLab</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    Jackson Burzynski
                </SocialLogo>
                <SocialIcons>
                    <SocialIconLink href="//www.https://www.linkedin.com/in/jackson-burzynski-4220ab108" target="_blank"
                    aria-label="LinkedIn">
                      <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href="//www.github.com/jburzy" target="_blank"
                    aria-label="Github">
                      <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank"
                    aria-label="Twitter">
                      <FaTwitch />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer