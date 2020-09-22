import React from "react"
import { Link } from "gatsby"
import logo from "../assets/images/shape.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
const Card = ({ post }) => {
  return (
    <article className="mt-10 lg:mt-4 w-full h-card rounded-lg border border-title_purple-secondary bg-background_card shadow-card">
      <header className="custom-bg h-40 rounded-t-lg p-4">
        <div className="flex">
          <div className="pr-4 pt-1">
            <img className="" src={logo}></img>
          </div>
          <h2 className="text-2xl font-primary text-title_gray-secondary font-bold">
            Ventajas de Deno sobre Nodejs
          </h2>
        </div>
        <div className="mt-10 pl-10">
          <time
            className="text-title_gray-secondary text-base inline font-primary"
            pubdate="true"
            dateTime="2011-08-28"
            title="August 28th, 2011"
          >
            8/28/11 -
          </time>
          <address className="text-title_gray-secondary text-base inline font-primary">
            @
            <a
              className="text-title_gray-secondary font-primary"
              rel="author"
              href="/author/john-doe"
            >
              alejandro
            </a>
          </address>
        </div>
      </header>

      <div className="p-4 font-secondary text-title_purple-primary text-base">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>
      <footer className="w-full font-secondary text-title_purple-primary text-base">
        <Link
          to={`/blog`}
          href="#responsive-header"
          className="p-4 hover:underline active:underline float-right "
        >
          <HiOutlineArrowNarrowRight
            style={{ fill: "#42316C" }}
            size={26}
            className="inline"
          ></HiOutlineArrowNarrowRight>
          <span className="font-semibold">Leer más</span>
        </Link>
      </footer>
    </article>
  )
}

export default Card
