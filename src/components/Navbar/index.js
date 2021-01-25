import React from "react"

import { NavContainer, NavWrapper, NavLogo, NavMenu } from "./Navbar.styles"

import data from "../../../content/navbar.yml"

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavLogo src={data.logo} alt={data.imageAlt}></NavLogo>
        <NavMenu>
          {data.navLinks.map((item, key) => (
            <NavLink key={key} to={`/${item.toLowerCase()}`}>
              {item}
            </NavLink>
          ))}
        </NavMenu>
      </NavWrapper>
    </NavContainer>
  )
}

export default Navbar
