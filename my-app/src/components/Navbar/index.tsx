import React, {useEffect, useState} from 'react'
import { IconContext } from 'react-icons/lib'
import {FaBars} from 'react-icons/fa'
import pdf from '../../documents/jb_resume.pdf'
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

const Navbar = (props: Props) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                  Jackson Burzynski
                </NavLogo>
                <MobileIcon onClick={props.toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="about"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    offset={-80}
                    >About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="research"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    offset={-80}
                    >Research</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="projects"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    offset={-80}
                    >Talks & Publications</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink href={pdf} target="_blank">Resume</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;