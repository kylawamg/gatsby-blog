import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import "./main-header.scss"
import { Link } from "gatsby"
import PropTypes from "prop-types"
const MainHeader = () => {
  let isMobileMenuOpen = false
  const [isExpanded, toggleExpansion] = useState(false)

  /*return (
    <div class="container mx-auto">
      <nav class="flex-row md:justify-between">
        <div class="flex flex-row justify-between h-16 lg:h-24 lg:px-20">
          <a href="#" className="self-center text-xl">
            &lt;<span className="text-teal-500 text-xl">/</span>devSpain&gt;
          </a>

          <AiOutlineMenu
            onClick={() => toggleMobileMenu()}
            className="md:hidden self-center"
          ></AiOutlineMenu>
        </div>

        <ul class="hidden md:flex md:flex-row" id="mobileMenu">
          <li class="pr-5">
            <a> Services </a>
          </li>
          <li class="pr-5">
            <a>Porfolio</a>
          </li>
          <li class="pr-5">
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  ) */
  return (
    <div class="container mx-auto">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a
            href="#"
            className="font-semibold text-xl tracking-tight self-center"
          >
            &lt;<span className="text-teal-500 font-bold text-xl">/</span>
            devSpain&gt;
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <AiOutlineMenu className="md:hidden self-center"></AiOutlineMenu>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to={`/page-2`}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Docs
            </Link>
            <Link
              to={`/page-2`}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </Link>
            <Link
              to={`/page-2`}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </Link>
          </div>
          <div>
            <a
              href="#download"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainHeader
