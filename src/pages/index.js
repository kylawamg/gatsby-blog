import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostComponent from "../components/posts"

import "../assets/scss/main.scss"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiPost {
            edges {
              node {
                title
                content
                category {
                  name
                }
                image {
                  publicURL
                }
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

export default IndexPage
