import React from "react"

import Layout from "../components/layout"
import PostComponent from "../components/posts"
import usePosts from "../hooks/usePosts"

import "../assets/scss/main.scss"

const IndexPage = () => {
  const response = usePosts()

  console.log(response.allStrapiPost.nodes)
  return (
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <h1>Strapi blog</h1>
        <PostComponent posts={response.allStrapiPost.nodes} />
      </div>
    </div>
  )
}

export default IndexPage
