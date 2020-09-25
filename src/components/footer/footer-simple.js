import React from "react"
import Logo from "../logo"
import { Link } from "gatsby"
// import "./footer-simple.css"
const FooterSimple = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto flex flex-col md:flex-row w-full lg:px-32 py-8 px-5">
        <div className="mb-8 md:mr-auto">
          <Logo />
        </div>
        <nav className="flex justify-between flex-wrap">
          {/* <ul className="text-title_gray-primary text-base divide-x"> */}
          <ul className="flex w-full">
            <li>
              <Link
                to={`/blog`}
                href="#responsive-header"
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2 pr-2"
              >
                @devSpain
              </Link>
            </li>
            <li>
              <Link
                to={`/blog`}
                href="#responsive-header"
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2 pr-2"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={`/page-2`}
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2 pr-2"
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                to={`/page-2`}
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2 pr-2"
              >
                Quiénes somos
              </Link>
            </li>
            <li>
              <Link
                to={`/page-2`}
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default FooterSimple
