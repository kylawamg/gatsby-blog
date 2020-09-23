import React from "react"
import usePosts from "../hooks/usePosts"
import Layout from "../components/layout"
import PostComponent from "../components/posts"
import SubHeader from "../components/header/sub-header-blog"

import "../assets/scss/main.scss"
const Blog = () => {
  const postsResponse = usePosts()

  return (
    <Layout subheader={<SubHeader />}>
      <PostComponent posts={postsResponse.allStrapiPost.nodes} />
    </Layout>
  )
}

export default Blog
