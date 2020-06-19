import React from "react"
import Card from "./card"

const Posts = ({ posts }) => {
  return (
    <div>
      <div
        className="uk-grid uk-grid-match uk-child-width-1-3@s uk-flex-left"
        uk-grid="true"
      >
        {posts.map((post, i) => {
          return <Card post={post} key={`post${post.title}`} />
        })}
      </div>
    </div>
  )
}

export default Posts
