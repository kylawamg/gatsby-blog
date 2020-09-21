import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { HiMenuAlt4 } from "react-icons/hi"

import Logo from "../logo"
import { Link } from "gatsby"

import "./main-header.scss"

const MainHeader = () => {
  let isMobileMenuOpen = false
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div className="container mx-auto">
      <nav className="border-b border-line_gray flex justify-between flex-wrap py-6 lg:px-12">
        <Logo />
        <div className="block lg:hidden">
          <HiMenuAlt4
            onClick={() => toggleExpansion(!isExpanded)}
            style={{ fill: "white" }}
            size={26}
            className="text-white  md:hidden self-center"
          ></HiMenuAlt4>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:flex-row-reverse lg:items-center lg:self-end lg:w-auto`}
        >
          <div className="text-title_gray-primary font-semibold">
            <Link
              to={`/page-2`}
              href="#responsive-header"
              className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Blog
            </Link>
            <Link
              to={`/page-2`}
              className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0  mr-4"
            >
              Cursos
            </Link>
            <Link
              to={`/page-2`}
              className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Quiénes somos
            </Link>
            <Link
              to={`/page-2`}
              className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainHeader
