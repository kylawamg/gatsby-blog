import React from "react"
import { BsArrowRight } from "react-icons/bs"

const CardTrainingSVG = ({ logo, title, description, link }) => {
  return (
    <article className="p-5 mt-10 lg:mt-4 w-full">
      <header>
        <img src={logo} style={{height: '50px', width: "50px" }}/>
        <h3 className="mt-5 mb-2 font-black text-xl text-left text-title_purple-secondary font-primary">
          {title}
        </h3>
      </header>
      <section>
        <p className="text-left text-title_purple-secondary font-secondary">
          {description}
        </p>
      </section>
      <footer className="flex items-center justify-end mt-4 text-text_cyan-primary">
        <BsArrowRight />
        <a className="text-right text-sm" href={link}>Saber más</a>
      </footer>
    </article>
  )
}

export default CardTrainingSVG
