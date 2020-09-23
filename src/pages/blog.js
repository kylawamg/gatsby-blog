import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostComponent from "../components/posts"
import SubHeader from "../components/header/sub-header-blog"

import "../assets/scss/main.scss"
const Blog = () => {
  return (
    <Layout subheader={<SubHeader />}>
      <StaticQuery
        query={graphql`
          query {
            allStrapiPost {
              nodes {
                id
                content
                strapiId
                title
                createdAt
                user {
                  username
                }
                category {
                  name
                }
                image {
                  absolutePath
                }
              }
            }
          }
        `}
        render={data => <PostComponent posts={data.allStrapiPost.nodes} />}
      />
    </Layout>
  )
}

export default Blog
