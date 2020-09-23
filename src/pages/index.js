import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostsComponent from "../components/posts"
import SubHeader from "../components/header/sub-header"
import About from "../components/about"

const IndexPage = () => (
  <Layout subheader={<SubHeader />}>
    <StaticQuery
      query={graphql`
        query {
          allStrapiPost {
            nodes {
              id
              strapiId
              content
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
      render={data => (
        <div>
          <PostsComponent posts={data.allStrapiPost.nodes} />
          <About />
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
