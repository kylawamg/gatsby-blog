import React from "react"
import { formatDateFromString } from "../../utils/formatData"

const SubHeaderPost = ({ post }) => {
  return (
    <div className="container mx-auto text-title_gray-secondary">
      <section className="relative p-12 lg:px-32 px-6">
        <h1 className="text-5xl font-primary leading-none lg:text-post_title">
          {post.title}
        </h1>

        <time
          className="text-2xl inline font-secondary"
          pubdate="true"
          dateTime="2011-08-28"
          title="August 28th, 2011"
        >
          {formatDateFromString(post.createdAt)} -
        </time>
        <address className="text-2xl inline font-secondary">
          @
          <a className="font-secondary" rel="author" href="/author/john-doe">
            {post.user.username}
          </a>
        </address>
      </section>
    </div>
  )
}

export default SubHeaderPost
