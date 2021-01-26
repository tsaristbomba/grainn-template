import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import GlobalStyles from "../styles/globalStyles"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Open+Sans&display=swap');
      </style>
      <GlobalStyles />
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
