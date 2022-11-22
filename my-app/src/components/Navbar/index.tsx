import React, {useEffect, useState} from 'react'
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
  toggle: any;
}

const Navbar = (props: Props) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
        <Nav scrollNav={scrollNav}>
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