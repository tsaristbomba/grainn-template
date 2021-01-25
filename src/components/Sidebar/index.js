import React from "react"

import {
  SidebarContainer,
  IconWrapper,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./Sidebar.styles"

import data from "../../../content/navbar.yml"

const Sidebar = ({ handleMenu, isOpen }) => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <IconWrapper onClick={handleMenu}>
        <CloseIcon />
      </IconWrapper>
      <SidebarMenu>
        {data.navLinks.map((item, key) => (
          <SidebarLink
            key={key}
            onClick={handleMenu}
            to={`/${item.navLink.toLowerCase()}`}
          >
            {item.navLink}
          </SidebarLink>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar
