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
import pdf from '../../documents/jb_resume.pdf'

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
                    Talks & Publications
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute href={pdf} target="_blank">Resume</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar