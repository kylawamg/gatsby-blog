import React from "react"
import { Link } from "gatsby"
import "./logo.css"

const Logo = () => {
  return (
    <Link to={`/`} href="#responsive-header" className="logo">
      &lt;
      <span className="text-text_cyan-primary">/</span>
      devSpain&gt;
    </Link>
  )
}

export default Logo
