import React from "react"
import Card from "./card"

const Posts = ({ posts }) => {
  return (
    <div className="bg-background_white">
      <div className="relative container mx-auto">
        <section className="p-12 lg:px-32 px-6">
          <div className="grid grid-cols-3 gap-4">
            {posts.map((post, i) => {
              if (i === 0) {
                return (
                  <div key={i} className="col-span-3">
                    <Card post={post} />
                  </div>
                )
              } else {
                return (
                  <div key={i} className="lg:col-span-1 col-span-3">
                    <Card post={post} />
                  </div>
                )
              }
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Posts

/*
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
    */
