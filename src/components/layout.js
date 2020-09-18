import React from "react"
import PropTypes from "prop-types"
import Nav from "./nav"
import Seo from "./seo"
import HeaderWrapper from "./header/header-wrapper"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <HeaderWrapper />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
//<main>{children}</main>
