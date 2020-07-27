import React from "react"
import { Link } from "gatsby"

import "../assets/scss/card.scss"

const Card = ({ post }) => {
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <Link to="''">
            <img className="img-card"></img>
          </Link>
        </div>

        <div className="uk-card-body">
          <Link to="''">
            <h3 className="uk-card-title">{post.title}</h3>
          </Link>
        </div>
        <div className="uk-card-foot">
          <span className="secondary-card-text">
            By:{" "}
            <a className="secondary-card-text blue-text" href="/">
              {post.content}
            </a>
          </span>
          <a className="secondary-card-text blue-text right">{}</a>
        </div>
      </div>
    </div>
  )
}

export default Card
