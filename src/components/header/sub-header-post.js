import React from "react"
const SubHeaderPost = () => {
  return (
    <div className="container mx-auto text-title_gray-secondary">
      <section className="relative p-12 lg:px-32 px-6">
        <h1 className="text-5xl font-primary leading-none lg:text-post_title">
          Guardias e interceptores en Angular
        </h1>

        <time
          className="text-2xl inline font-secondary"
          pubdate="true"
          dateTime="2011-08-28"
          title="August 28th, 2011"
        >
          8/28/11 -
        </time>
        <address className="text-2xl inline font-secondary">
          @
          <a className="font-secondary" rel="author" href="/author/john-doe">
            alejandro
          </a>
        </address>
      </section>
    </div>
  )
}

export default SubHeaderPost
