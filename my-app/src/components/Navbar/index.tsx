import React from 'react'
import {FaBars} from 'react-icons/fa'
import pdf from '../../documents/jb_resume.pdf'

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
  toggle: any
}

const Navbar = (props: Props) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Jackson Burzynski</NavLogo>
                <MobileIcon onClick={props.toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="about">About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="research">Research</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="projects">Projects</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink href={pdf} target="_blank">Resume</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;