import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query ArticleQuery($id: String!) {
    strapiPost(id: { eq: $id }) {
      id
      title
      content
      published_at
    }
  }
`

const Post = ({ data }) => {
  const post = data.strapiPost
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={post.content} />
            <p>
              <Moment format="MMM Do YYYY">{post.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post
