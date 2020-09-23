import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SubHeader from "../components/header/sub-header-post"
import PostDetail from "../components/post-detail"
const PostTemplate = ({ data }) => (
  <Layout subheader={<SubHeader post={data.strapiPost} />}>
    <PostDetail post={data.strapiPost} />
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String) {
    strapiPost(strapiId: { eq: $id }) {
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
`
