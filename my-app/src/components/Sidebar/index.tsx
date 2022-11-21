import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SideBtnWrap,
    SidebarRoute,
    SidebarLink,
    SidebarMenu
} from './SidebarElements'

type Props = {
    isOpen: boolean;
    toggle: any
}

const Sidebar = (props: Props) => {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
        <Icon onClick={props.toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={props.toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="research" onClick={props.toggle}>
                    Research
                </SidebarLink>
                <SidebarLink to="projects" onClick={props.toggle}>
                    Projects
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/resume">Resume</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar