import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostComponent from "../components/posts"
import SubHeader from "../components/header/sub-header"

import "../assets/scss/main.scss"

const IndexPage = () => (
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
      render={data => <PostComponent posts={data.allStrapiPost.edges} />}
    />
  </Layout>
)

export default IndexPage
