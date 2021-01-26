import React from "react"
import { FaBars } from "react-icons/fa"

import {
  NavContainer,
  NavWrapper,
  NavLogo,
  NavLogoString,
  NavMenu,
  NavLink,
  MobileIcon,
} from "./Navbar.styles"

import data from "../../../content/navbar.yml"
import Sidebar from "../Sidebar"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  // open/close mobile menu
  function handleMenu() {
    setIsOpen(!isOpen)
  }
  //

  function handleLogo(logo) {
    switch (logo) {
      case undefined:
        return <NavLogoString to="/">{data.name}</NavLogoString>
      case null:
        return <NavLogoString to="/">{data.name}</NavLogoString>
      default:
        return <NavLogo src={data.logo} alt="Logo" />
    }
  }

  return (
    <NavContainer>
      <Sidebar handleMenu={handleMenu} isOpen={isOpen} />
      <NavWrapper>
        {handleLogo(data.logo)}
        <MobileIcon onClick={handleMenu}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {data.navLinks.map((item, key) => (
            <NavLink key={key} to={`/${item.navLink.toLowerCase()}`}>
              {item.navLink}
            </NavLink>
          ))}
        </NavMenu>
      </NavWrapper>
    </NavContainer>
  )
}

export default Navbar
