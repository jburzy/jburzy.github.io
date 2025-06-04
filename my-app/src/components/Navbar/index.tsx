import React, {useEffect, useState} from 'react'
import { IconContext } from 'react-icons/lib'
import { FaBars } from 'react-icons/fa'
import pdf from '../../documents/CV.pdf'
import { animateScroll as scroll } from 'react-scroll'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

type Props = {
  toggle: any;
}

const Navbar = ({ toggle }: Props) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    setScrollNav(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    return () => window.removeEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <IconContext.Provider value={{ color: '#ffffff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Prof. Jackson Burzynski
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth duration={500} spy offset={-80}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="research" smooth duration={500} spy offset={-80}>
                Research
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth duration={500} spy offset={-80}>
                Selected Publications
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth duration={500} spy offset={-80}>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href={pdf} target="_blank" rel="noopener noreferrer">
              CV
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
