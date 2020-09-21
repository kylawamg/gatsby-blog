import React from "react"
import { Link } from "gatsby"

import "../assets/scss/card.scss"

const Card = ({ post }) => {
  return (
    <article className="mt-10 lg:mt-4 w-full h-card rounded-lg border border-title_purple-secondary bg-background_card shadow-card">
      <header className="custom-bg h-40 rounded-t-lg p-4">
        <h2 className="text-2xl font-primary text-title_gray-secondary font-bold inline-block">
          Ventajas de Deno sobre Nodejs
        </h2>
        <div className="mt-6">
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

      <div className="p-4 font-primary text-title_purple-primary text-base">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>
      <footer className="card__footer"></footer>
    </article>
  )
}

export default Card
