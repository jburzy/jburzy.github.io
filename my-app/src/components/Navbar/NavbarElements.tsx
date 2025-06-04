import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

interface NavSectionProps {
  scrollNav?: boolean;
}

export const Nav = styled.nav<NavSectionProps>`
  background: ${({ scrollNav }) => (scrollNav ? '#841617' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem; /* Larger font */
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`

export const NavLogo = styled(LinkR)`
  color: #ffffff; /* White */
  justify-self: flex-start; 
  cursor: pointer;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 700;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #ffffff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  margin-right: 24px;
  padding-inline-start: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
  font-weight: 300;
`

export const NavLinks = styled(LinkS)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.25rem;
  height: 100%;
  cursor: pointer;
  font-weight: 300;
  font-size: 1.5rem;

  &.active {
    border-bottom: 3px solid #f0f0f0; /* Light Gray */
  }

  &:hover {
    color: #bcdceb; /* Sky (OU secondary color) */
    transition: color 0.3s ease-in-out;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    display: none;
  }

`

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #f0f0f0; /* Light Gray */
  white-space: nowrap;
  padding: 12px 26px;
  color: #000000; /* Black */
  font-size: 1.1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background: #ffffff;
    color: #000000;
  }
`
