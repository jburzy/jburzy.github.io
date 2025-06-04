import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

interface SidebarProps {
    isOpen?: boolean;
}

export const SidebarContainer = styled.aside<SidebarProps>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #841617;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%': '0')};
    top: ${({ isOpen }) => (isOpen ? '0': '-100%')};
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding-inline-start: 0px;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    padding: 0 1rem;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #bcdceb;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 300;
`

export const SidebarRoute = styled.a`
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

