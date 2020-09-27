import React from "react"
import { Link } from "gatsby"

const Logo = () => {
  return (
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Link
        to={`/`}
        style={{fontFamily: "Inconsolata"}}
        href="#responsive-header"
        className="text-title_gray-primary font-semibold text-xl tracking-tight self-center"
      >
        &lt;
        <span className="text-text_cyan-primary font-extrabold text-2xl">
          /
        </span>
        devSpain&gt;
      </Link>
    </div>
  )
}

export default Logo
