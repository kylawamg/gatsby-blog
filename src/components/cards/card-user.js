import React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/images/oval.png"
const CardUser = ({ post }) => {
  return (
    <article className="border-t-8  absolute h-user_card w-user_card  border border-title_purple-secondary bg-background_card p-4 rounded shadow-card_user">
      <img
        className="absolute top-user_avatar left-0 ml-10 h-20 w-20 border border-title_purple-primary rounded-full"
        src={Logo}
      ></img>
      <header className="text-center">
        <h3 className="text-xl text-title_purple-secondary font-primary font-bold">
          Holi
        </h3>
        <span className="text-text_cyan-primary text-lg font-secondary">
          @alejandro
        </span>
      </header>

      <div className="text-left text-title_purple-secondary font-secondary text-xl">
        <p>
          Optional. Specifies the character, or the regular expression, to use
          for splitting the string.
        </p>
      </div>
    </article>
  )
}

export default CardUser
