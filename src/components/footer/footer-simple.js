import React from "react"
import Logo from "../logo"
import { Link } from "gatsby"
const FooterSimple = () => {
  return (
    <footer className="static bottom-0 custom-bg h-20">
      <section className="container mx-auto w-full  lg:px-32 px-6">
        <nav className="flex justify-between flex-wrap py-6 ">
          <Logo />

          <div className="w-full block flex-grow lg:flex lg:flex-row-reverse lg:items-center lg:self-end lg:w-auto">
            <div className="text-title_gray-primary text-base divide-x">
              <p className="block mt-4 lg:inline-block lg:mt-0  pr-2">
                @devSpain
              </p>
              <Link
                to={`/blog`}
                href="#responsive-header"
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2 pr-2"
              >
                Blog
              </Link>
              <Link
                to={`/page-2`}
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2 pr-2"
              >
                Cursos
              </Link>
              <Link
                to={`/page-2`}
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2 pr-2"
              >
                Quiénes somos
              </Link>
              <Link
                to={`/page-2`}
                className="hover:underline active:underline block mt-4 lg:inline-block lg:mt-0 pl-2"
              >
                Contacto
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </footer>
  )
}

export default FooterSimple
