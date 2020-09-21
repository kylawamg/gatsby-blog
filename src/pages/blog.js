import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostComponent from "../components/posts"
import SubHeader from "../components/header/sub-header-post"

import "../assets/scss/main.scss"
const Blog = () => {
  return (
    <Layout subheader={<SubHeader />}>
      <StaticQuery
        query={graphql`
          query {
            allStrapiPost {
              edges {
                node {
                  title
                  content
                }
              }
            }
          }
        `}
        render={data => (
          <div className="uk-section">
            <div className="uk-container uk-container-large">
              <h1>Strapi blog</h1>
              <PostComponent posts={data.allStrapiPost.edges} />
            </div>
          </div>
        )}
      />
    </Layout>
  )
}

export default Blog
