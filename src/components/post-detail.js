import React from "react"
import ReactMarkdown from "react-markdown"
const PostDetail = ({ post }) => {
  return (
    <div className="bg-background_white mx-auto lg:px-20 px-4">
      <div className="container mx-auto">
        <section className="p-12 lg:px-32 px-6">
          <article>
            <ReactMarkdown source={post.content} />
          </article>
        </section>
      </div>
    </div>
  )
}

export default PostDetail
