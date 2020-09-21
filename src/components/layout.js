import React from "react"
import PropTypes from "prop-types"
import Seo from "./seo"
import HeaderWrapper from "./header/header-wrapper"

const Layout = ({ children, subheader }) => {
  return (
    <>
      <Seo />
      <HeaderWrapper>{subheader}</HeaderWrapper>
      <main className="relative">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
