import styled from "styled-components"
import { Link } from "gatsby"
import { primary, secondary, tertiary } from "../../styles/palette"

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 120px;
  background: ${tertiary};

  @media screen and (max-width: 768px) {
    height: 80px;
  }
`
export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;
  z-index: 1;
  width: 100%;
  padding-left: 24px;
  max-width: 1150px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    height: 80px;
  }
`
export const NavLogo = styled.img`
  height: 100%;
  /* padding: 1rem; */
`
export const NavLogoString = styled(Link)`
  text-decoration: none;
  color: ${secondary};
  text-transform: uppercase;
  font-family: "Open Sans", "Noto Sans JP";
  font-size: 22px;
  font-weight: bold;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${secondary};
  }
`
export const NavMenu = styled.div`
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${secondary};
  padding: 12px 24px;
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${primary};
    border-bottom: 2px solid ${primary};
  }
`
export const NavButton = styled(Link)``
